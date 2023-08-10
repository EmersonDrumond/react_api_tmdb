import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa"

const imageURL = import.meta.env.VITE_IMG

const MovieCard = ( {movie, showLink = true }) => {

    return(
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} atl={movie.title}/>
            <h2>{movie.title}</h2>
            <p><FaStar/> {movie.vote_avarege}8.7</p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )

}

export default MovieCard