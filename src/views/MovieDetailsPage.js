import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import * as movieApi from "../services/movie-api";
import PropTypes from "prop-types";
import NotFound from "./NotFound";

export default class MovieDetailsPage extends Component {
  state = {
    movie: {
      genres: [],
    },
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    movieApi
      .getMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push("/movies");
  };

  render() {
    const {
      id,
      title,
      poster_path,
      vote_average,
      overview,
      release_date,
      genres,
    } = this.state.movie;
    const { isLoading, error } = this.state;
    let releaseYear = "";
    if (!!release_date) {
      releaseYear = release_date.substring(0, 4);
    }

    return (
      <div>
        <button className="backBtn" type="button" onClick={this.handleGoBack}>
          &larr; Go back
        </button>
        {error && <NotFound />}
        {isLoading && <Loader />}
        <section className="About">
          {!!poster_path && (
            <img
              className="Img"
              src={movieApi.posterimgpath + poster_path}
              alt={title}
            />
          )}
          <section>
            <h1>
              {title} ({releaseYear})
            </h1>
            <p>User score: {vote_average * 10}% </p>
            <p className="bold">Overwiew</p>
            <p>{overview}</p>
            <p className="bold">Genres</p>
            <ul>
              {genres.map((genre) => (
                <li className="genresList" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section className="addInfoSection">
          <p className="bold">Additional information</p>
          <NavLink
            className="addInfo"
            activeClassName='addInfo-active'
            to={{
              pathname: `/movies/${id}/cast`,
              state: { from: this.props.location.state.from },
            }}
          >
            Cast
          </NavLink>
          <NavLink
            className="addInfo"
            activeClassName='addInfo-active'
            to={{
              pathname: `/movies/${id}/reviews`,
              state: { from: this.props.location.state.from },
            }}
          >
            Reviews
          </NavLink>
        </section>
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  props: PropTypes.object,
};
