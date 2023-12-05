import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { db } from '$lib/db';
import { todaysQuestion } from '$lib/utils/dbUtils';

export const load: PageServerLoad = async ({ params, cookies }) => {

    const questionData = await todaysQuestion();

    const userResponse = cookies.get(questionData.id);

    // if user has already submitted a response, redirect them to result screen 
    if (userResponse !== undefined) {
        throw redirect(302, `/result`);
    }

    return { question: questionData };

    throw error(404, 'Not found');
};

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const answer = data.get("selectedAnswer") as string;
        const questionId = data.get("questionId") as string;

        cookies.set(questionId, answer);

        await db.response.create({
            data: {
                answerId: answer
            }
        });

        throw redirect(302, `/result`);
    },
} satisfies Actions;