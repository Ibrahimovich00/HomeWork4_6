import { useEffect, useState } from "react";
import axios from "axios";

export const Movie = () => {
	const[movies, setMovies] = useState();
    const[newMovie, setNewMovie] = useState({
			title: '',
			age: '',
			descriptions: ''
		});

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios.get('http://localhost:3000/movies')
        .then(({data}) => setMovies(data))
        .catch((error) => console.log(error))
    }

	const deleteMovie = (id) => {
		axios.delete(`http://localhost:3000/movies/${id}`)
		.then(() => {
			getMovies()
		})
		.catch((error) => {
			console.log(error);
		})
	}

    return (
			<div>
				<h1>Movies</h1>
				<ul>
					{movies &&
						movies.map(movie => (
							<li key={movie.id}>
								<p>{movie.title}</p>
								<p>{movie.age}</p>
								<p>{movie.descriptions}</p>
								<button onClick={() => deleteMovie(movie.id)}>Delete</button>
							</li>
						))
					}
				</ul>

				<input
					type='text'
					placeholder='title'
					value={newMovie.title}
					onChange={e => {
						setNewMovie({ ...newMovie, title: e.target.value })
					}}
				/>
				<input
					type='text'
					placeholder='age'
					value={newMovie.age}
					onChange={e => {
						setNewMovie({ ...newMovie, age: e.target.value })
					}}
				/>
				<input
					type='text'
					placeholder='description'
					value={newMovie.descriptions}
					onChange={e => {
						setNewMovie({ ...newMovie, descriptions: e.target.value })
					}}
				/>
			</div>
		)
}