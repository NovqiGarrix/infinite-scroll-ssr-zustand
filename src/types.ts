export interface InfoReponse {
    page: number;
    nextURL?: string | null;
    allPage: number;
}

export interface IMovie {
    slug: string;

    title: string;

    poster: string;

    rating: string;
}

export interface APIResponse<T> {
    info: InfoReponse,
    data: T,
    error?: string | null;
}