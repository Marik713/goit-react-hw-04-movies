import React, { Component } from "react";
import Loader from "../Loader/Loader";
import * as movieApi from "../../services/movie-api";
import styles from "./Cast.module.css";
import PropTypes from "prop-types";
import NotFound from "../../views/NotFound";

export default class Cast extends Component {
  state = { isLoading: false, credits: [], error: null };

  componentDidMount() {
    this.setState({ isLoading: true });
    movieApi
      .getMovieCast(this.props.match.params.movieId)
      .then((result) =>
        this.setState({ credits: result.cast}))
        .catch((err) => this.setState({ error: err }))
        .finally(() => this.setState({ isLoading: false }))
        }

  render() {
    const { isLoading, credits, error } = this.state;

    return (
      <div>
        {error && <NotFound />}
        {isLoading && <Loader />}
        <ul className="wrapper">
          {credits.length > 0 &&
            credits.map((member) => (
              <li className={styles.list} key={member.credit_id}>
                {member.profile_path ? (
                  <img
                    src={movieApi.imgpath + member.profile_path}
                    alt={member.name}
                  />
                ) : (
                  <img
                    className="castImg"
                    src="https://i.pinimg.com/736x/7c/1c/a4/7c1ca448be31c489fb66214ea3ae6deb.jpg"
                    alt={member.name}
                  />
                )}
                <p className="bold">{member.name}</p>
                <p>
                  <span className="bold">Character:</span> {member.character}
                </p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

Cast.propTypes = {
  props: PropTypes.object,
};
