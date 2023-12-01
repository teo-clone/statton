import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { db } from '$lib/db';

export const load: PageServerLoad = ({ params, cookies }) => {

    const userResponse = cookies.get("userResponse");

    // if user has already submitted a response, redirect them to result screen 
    if (userResponse !== undefined) {
        throw redirect(302, `/result`);
    }

    return {
        question: db.question.findUniqueOrThrow({
            where: {
                id: 1
            },
            include: {
                answers: true
            }
        })
    };

    throw error(404, 'Not found');
};

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const answer = data.get("selectedAnswer") as string;

        cookies.set("userResponse", answer);

        await db.response.create({
            data: {
                answerId: answer
            }
        });

        throw redirect(302, `/result`);
    },
} satisfies Actions;