import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/db';

export const load: PageServerLoad = async ({ params, cookies }) => {

    const answerId = cookies.get("userResponse");

    if (!answerId) {
        // if userResponse is not found in cookies, redirect the user to the landing page
        throw redirect(302, `/`);
    }

    const questionId = 1;

    const questionData = await db.question.findUniqueOrThrow({
        where: {
            id: questionId
        },
        include: {
            answers: true
        }
    });

    const response = questionData.answers.find((answer) => answer.id === answerId);

    const answerStats = Promise.all(questionData.answers.map(async (a) => {
        return {
            answer: a.title,
            count: await db.response.count({
                where: {
                    answerId: a.id
                }
            })
        }
    }));

    return {
        question: questionData,
        response: response,
        stats: answerStats
    };

    throw error(404, 'Not found');
};