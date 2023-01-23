import { create } from 'zustand';
import { APIResponse, IMovie, InfoReponse } from '../types';

interface IUseMovie {
    movies: Array<IMovie>;
    setMovies: (movies: Array<IMovie>) => void;

    info: InfoReponse;
    setInfo: (info: InfoReponse) => void;
}

export const useMovies = create<IUseMovie>((set, get) => ({

    movies: [],

    setMovies(movies) {
        set((prev) => ({ ...prev, movies: [...prev.movies, ...movies] }));
    },

    info: {
        allPage: 0,
        page: 1,
        nextURL: ""
    },

    setInfo(info) {
        set({ info });
    },

}));

export const hydrateMovies = (initialState: APIResponse<Array<IMovie>>) => {
    const state = useMovies.getState();
    const isDataSet = state.movies?.length && state?.info.allPage > 0

    if (initialState && !isDataSet) {
        useMovies.setState({ movies: initialState.data, info: initialState.info });
    }
}