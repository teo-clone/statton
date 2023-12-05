import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/db';
import { todaysQuestion } from '$lib/utils/dbUtils';

export const load: PageServerLoad = async ({ params, cookies }) => {

    const questionData = await todaysQuestion();

    const answerId = cookies.get(questionData.id);

    // if response is not found in cookies for today's question, redirect the user to the landing page
    if (!answerId) {
        throw redirect(302, `/`);
    }

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