import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, cookies }) => {

    const userResponse = cookies.get("userResponse");

    // if user has already submitted a response, redirect them to result screen 
    if (userResponse !== undefined) {
        throw redirect(302, `/result`);
    }

    return;

    throw error(404, 'Not found');
};