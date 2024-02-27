import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { todaysQuestion } from '$lib/utils/dbUtils';

export const load: PageServerLoad = async ({ params, cookies }) => {

    const questionData = await todaysQuestion();

    const userResponse = cookies.get(questionData.id);

    // if user has already submitted a response, redirect them to result screen 
    if (userResponse !== undefined) {
        redirect(302, `/result`);
    }

    // otherwise start the user off on question page for now
    redirect(302, `/question`);

    error(404, 'Not found');
};