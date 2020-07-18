import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MoviesDashboard extends Component {
    render() {
        const { users, movies, usersByMovie } = this.props;

        const movieCards = Object.keys(movies).map((id) => (
            <MovieCard key={id} users={users} usersWhoLikedMovie={usersByMovie[id]} movieInfo={movies[id]} />
        ));

        return <ul>{movieCards}</ul>;
    }
}

export default MoviesDashboard;
