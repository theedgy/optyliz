// Helper to get url params. In a real world i would use `new URLSearchParams()` but it's `toString()` method
// encodes the string and replace spaces (like pulp%20fiction) which not work correctly in omdbapi.com api
const getParsedParams = (params: { [key: string]: string | number }) =>
    Object.entries(params)
        .map((entry) => entry.join('='))
        .join('&');

// fetcher function to fetch and handle errors with generic typings
export const fetcher = async <T>(params: {
    [key: string]: string | number;
}): Promise<T> => {
    // Those values should go to .env file, but for just reacruitment app it's faster to handle deployments etc.
    const urlBase = `${window.location.protocol}//www.omdbapi.com`;
    const apikey = 'b508fc3';

    const response = await fetch(
        `${urlBase}?${getParsedParams({
            apikey,
            ...params,
        })}`
    );

    if (!response.ok) {
        console.log(response.json());
        throw new Error(`Response not successful: ${response}`);
    }

    return await response.json();
};
