import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import * as movieApi from "../services/movie-api";
import PropTypes from "prop-types";
import NotFound from "./NotFound";

export default class HomePage extends Component {
  state = {
    trending: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    movieApi.getTrending()
    .then((movies) => this.setState({trending: movies}))
    .catch((err) => this.setState({ error: err}))
    .finally(() => this.setState({ isLoading: false }))
  }


  render() {
    const { isLoading, trending, error } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        {error && <NotFound />}
        {isLoading && <Loader />}
        <ul className="wrapper">
          {trending.map((movie) =>
            movie.media_type === "movie" ? (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.poster_path && (
                    <img
                      className="Img"
                      src={movieApi.posterimgpath + movie.poster_path}
                      alt={movie.title}
                    />
                  )}
                  <h2 className="bold text">{movie.title}</h2>
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </>
    );
  }
}

HomePage.propTypes = {
  props: PropTypes.object,
};
