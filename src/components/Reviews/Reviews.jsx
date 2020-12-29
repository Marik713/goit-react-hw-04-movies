import React, { Component } from "react";
import Loader from "../Loader/Loader";
import * as movieApi from "../../services/movie-api";
import styles from "./Reviews.module.css";
import PropTypes from "prop-types";
import NotFound from "../../views/NotFound";

export default class Reviews extends Component {
  state = { isLoading: false, reviews: [], error: null };

  componentDidMount() {
    this.setState({ isLoading: true });
    movieApi
      .getMovieReviews(this.props.match.params.movieId)
      .then((reviews) => 
        this.setState({
          reviews}))
          .catch((err) => this.setState({ error: err }))
          .finally(() => this.setState({ isLoading: false }))
        }

        
  render() {
    const { isLoading, reviews ,error} = this.state;

    return (
      <div>
        {error && <NotFound />}
        {isLoading && <Loader />}
        <ul className={styles.list}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <li className={styles.listItem} key={review.id}>
                <p>
                  <span className={styles.title}> Author:</span> {review.author}
                </p>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <h2>We don't have any reviews for this movie</h2>
          )}
        </ul>
      </div>
    );
  }
}

Reviews.propTypes = {
  props: PropTypes.object,
};
