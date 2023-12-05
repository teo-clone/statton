export const today = () => {

    const date = new Date(); // Current date and time

    const estDate = date.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$1-$2');

    return estDate;
}