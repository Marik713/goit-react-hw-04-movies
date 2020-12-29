
export const searchMovies = (query = '') => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=87547ad0a5cfee0fba05460a073a9eb9&query=${query}`,
  )
    .then(res => res.json())
    .then(data => data.results);
};

export const getTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
  )
    .then(res => res.json())
    .then(data => data.results);
};
export const getMovieDetails = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
  ).then(res => res.json());
};
export const getMovieCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
  ).then(res => res.json());
};
export const getMovieReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=87547ad0a5cfee0fba05460a073a9eb9`,
  )
    .then(res => res.json())
    .then(data => data.results);
};
export const imgpath = 'https://image.tmdb.org/t/p/w185';
export const posterimgpath = `https://image.tmdb.org/t/p/w342/`;
