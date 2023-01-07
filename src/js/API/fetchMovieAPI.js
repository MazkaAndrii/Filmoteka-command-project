import axios from 'axios';

const API_KEY = 'b5dbc40d665affe8ed0bac71106b3fa8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class MovieDB {
  #searchQuery = '';
  #page = 1;

  #moviesParams = {
    params: {
      api_key: API_KEY,
    },
  };

  #genresParams = {
    params: {
      api_key: API_KEY,
    },
  };

  async fetchPopularMovie() {
    const url = `trending/movie/day?page=${this.#page}`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  async fetchSearchMovie() {
    const url = `search/movie/?query=${this.#searchQuery}&page=${this.#page}`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  async fetchMoviesGenres() {
    const {
      data: { genres },
    } = await axios.get(`genre/movie/list?`, this.#genresParams);

    return genres;
  }

  async fetchMovieDetails(id) {
    const url = `movie/${id}?`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  get query() {
    return this.#searchQuery;
  }

  set query(newQuery) {
    this.#searchQuery = newQuery;
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  incrementPage() {
    this.#page += 1;
  }

  decrementPage() {
    this.#page -= 1;
  }

  resetPage() {
    this.#page = 1;
  }
}
