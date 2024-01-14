/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react'
import "./row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'http://image.tmdb.org/t/p/original/';

function Row({ title, fetchURL, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("")

    useEffect(() => {
        async function fetchData() {
            const fullURL = 'https://api.themoviedb.org/3' + fetchURL;
            const requests = await axios.get(fullURL);

            setMovies(requests.data.results);

            return requests;
        }

        fetchData();
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
            autoplay: 0,
        }
    }
    const handleClick = (movie) => {
        if (trailerURL) {
            setTrailerURL("");
        } else {
            movieTrailer(null, { tmdbId: movie.id })
                .then((url) => {
                    console.log("url is " + url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log("urlParamsn" + urlParams);
                    setTrailerURL(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className='row'>

            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${movie?.poster_path}`}
                        alt={movie.name} />
                ))}
            </div>

            <div style={{ padding: "40px" }}>
                {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
            </div>
        </div >
    )
}

export default Row;