import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { todaysQuestion } from '$lib/utils/dbUtils';

export const load: PageServerLoad = async ({ params, cookies }) => {

    const questionData = await todaysQuestion();

    const userResponse = cookies.get(questionData.id);

    // if user has already submitted a response, redirect them to result screen 
    if (userResponse !== undefined) {
        throw redirect(302, `/result`);
    }

    return;

    throw error(404, 'Not found');
};