import { APIResponse, IMovie } from "../types";

export default async function getNextMovies(nextURL: string): Promise<APIResponse<Array<IMovie>> | null> {
    try {

        const resp = await fetch(nextURL, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return resp.json();

    } catch (error: any) {
        console.warn(
            `Catched Error while fetching next url for movies: ${error.message}. 
            Fetch URL: ${nextURL}`
        )
        return null
    }
}