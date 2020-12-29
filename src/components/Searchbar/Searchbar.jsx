import React, { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = {};

  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <input
          className={styles.SearchFormInput}
          type="text"
          placeholder="Search movies"
          value={this.state.search}
          name="search"
          onChange={this.handleChange}
        />

        <button type="submit" className={styles.SearchFormButton}>
          <span>Search</span>
        </button>
      </form>
    );
  }
}