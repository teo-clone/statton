import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { db } from '$lib/db';

export const load: PageServerLoad = async ({ params, cookies }) => {

    const questionNum = params.questionNum;

    const questionData = await db.question.findUniqueOrThrow({
        where: {
            number: questionNum
        },
        include: {
            answers: true
        }
    });

    const userResponse = cookies.get(questionData.id);

    // if user has already submitted a response, redirect them to result screen 
    if (userResponse !== undefined) {
        throw redirect(301, `/questions/${questionNum}/result`);
    }

    return { question: questionData };
};

export const actions = {
    default: async ({ request, cookies, params }) => {
        const questionNum = params.questionNum;

        const data = await request.formData();

        const answer = data.get("selectedAnswer") as string;
        const questionId = data.get("questionId") as string;

        cookies.set(questionId, answer, { path: '/' });

        await db.response.create({
            data: {
                answerId: answer
            }
        });

        throw redirect(301, `/questions/${questionNum}/result`);
    },
} satisfies Actions;