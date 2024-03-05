import type { PageServerLoad } from './$types';
import { db } from '$lib/db';

export const load: PageServerLoad = async ({ url, cookies }) => {
    type SortOrder = 'asc' | 'desc';

    const sortOrder = (url.searchParams.get('sortOrder') ?? 'desc') as SortOrder;

    const questions = await db.question.findMany({
        orderBy: {
            number: sortOrder
        },
        include: {
            answers: true
        }
    });

    const responses = new Map();

    for (const question of questions) {
        const response = cookies.get(question.id);

        if (response) {
            responses.set(question.id, response);
        }
    }

    return { questions, responses, sortOrder };
};