import axiosClient from "./axiosClient";

export const category = {
    films: 'films',
    popularFilms: 'popularFilms',
    tv: 'tv',
    topAnime: 'topAnime'
}

export const movieType = {
    'top?type=TOP_250_BEST_FILMS&': 'top?type=TOP_250_BEST_FILMS&',
    'top?type=TOP_100_POPULAR_FILMS&':  'top?type=TOP_100_POPULAR_FILMS&',
}

export const tvType = {
  'films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&': 'films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&',
  'films?genres=24&order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&': 'films?genres=24&order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&'
}

const kinopoiskApi = {
    getMoviesList: (type, params, pageNumber = 1) => {
        const url = 'v2.2/films/' + movieType[type] + `page=${pageNumber}`;
        return axiosClient.get(url, params);
    },
    getTvList: (type, params, pageNumber = 1) => {
        const url = 'v2.2/' + tvType[type] + `page=${pageNumber}`;
        return axiosClient.get(url, params);
    },
    search: (cate, params) => {
        const url = 'v2.1/films/search-by-keyword?';
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = 'v2.2/' + category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default kinopoiskApi;