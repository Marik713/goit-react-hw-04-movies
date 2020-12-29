import React, { Component } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar/Searchbar";
import getQueryParams from "../utils/get-query-params";
import * as movieApi from "../services/movie-api";
import Loader from "../components/Loader/Loader";
import PropTypes from "prop-types";
import NotFound from "./NotFound";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.setState({
        isLoading: true,
      });
      movieApi
        .searchMovies(query)
        .then((movies) => this.setState({ movies }))
        .catch((err) => this.setState({ error: err }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.setState({
        isLoading: true,
      });
      movieApi.searchMovies(nextQuery).then((movies) => {
        this.setState({
          movies,
          isLoading: false,
        });
      });
    }
  }

  setSearchQuery = (searchQuery) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { isLoading, movies, error } = this.state;

    return (
      <>
        <Searchbar onSearch={this.setSearchQuery} />
        {error && <NotFound />}
        {isLoading && <Loader />}
        <ul className="wrapper">
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {!!movie.poster_path && (
                  <img
                    className="Img"
                    src={movieApi.posterimgpath + movie.poster_path}
                    alt={movie.title}
                  />
                )}
                <h2 className="bold text"> {movie.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

MoviesPage.propTypes = {
  props: PropTypes.object,
};
