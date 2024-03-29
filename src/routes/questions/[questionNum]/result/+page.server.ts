import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
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

    const answerId = cookies.get(questionData.id);

    // if response is not found in cookies for today's question, redirect the user to the landing page
    if (!answerId) {
        throw redirect(302, `/`);
    }

    const response = questionData.answers.find((answer) => answer.id === answerId);

    const answerStats = await Promise.all(questionData.answers.map(async (a) => {
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

    error(404, 'Not found');
};