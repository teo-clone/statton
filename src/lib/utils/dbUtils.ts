import { db } from '$lib/db';
import { today } from './timeUtils';

export const todaysQuestion = async () => {

    // attempt to get today's question
    const questionData = await db.question.findFirst({
        where: {
            date: today()
        },
        include: {
            answers: true
        }
    });

    // TODO: this should instead be "the most recent one before TODAY", not "all time most recent"
    // if there is no question of the day, return the most recent one
    if (!questionData) {
        return await db.question.findFirstOrThrow({
            orderBy: {
                date: 'desc'
            },
            include: {
                answers: true
            }
        });
    }

    return questionData;
}