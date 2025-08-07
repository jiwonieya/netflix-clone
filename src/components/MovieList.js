import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [selectMovie, setSelectMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    //tmdb info
    const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWNjNjdlOGY2MTdjMjI4YzljOTc2YmIwNWNkMzljYSIsIm5iZiI6MTczNzYwNjUzNC43Nzc5OTk5LCJzdWIiOiI2NzkxYzU4NjUxNDhmODc2N2NmYTZiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NnACMXUNz6GNI8pX87lg-HmC0rc4Dg0UM3CJmRDeTyk"
    const URL = `https://api.themoviedb.org/3/movie/popular`;
    //비동기 요청
    const fetchMovies = async () => {
        try {
            const response = await axios.get(URL, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    accept: 'application/json'
                },
                params: {
                    language: 'ko-KR',
                    region: 'KR',
                    page: 1
                }
            });
            const movies = response.data.results.slice(0, 8);
            if (movies) {
                setIsLoading(false);
                setMovies(movies);
            } else {
                setError("데이터를 가져오지 못했습니다.");
            }
        } catch (error) {
            setError("에러 발생. 데이터 패치를 하지 못하였습니다.");
        }
    }
    useEffect(() => {
        setIsLoading(true);
        fetchMovies();
    }, []);
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className={"btn-next"}
                onClick={onClick}
            ><IoIosArrowForward /></div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className={"btn-prev"}
                onClick={onClick}
            ><IoIosArrowBack /></div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="movie-list">
            <h2>인기 있는 영화</h2>
            <Slider {...settings}>
                {
                    movies.map((item, idx) => {
                        return (
                            <div key={idx} className="movie-card" onClick={() => { setSelectMovie(item) }}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt={item.title}
                                />
                                <p>{idx + 1}</p>
                            </div>
                        )
                    })
                }
            </Slider>
            {/* 상세 설명 팝업 */}
            {
                selectMovie && (
                    <div className="movie-popup">
                        <button onClick={()=>{setSelectMovie(null)}}>×</button>
                        {console.log(selectMovie)}
                        <img src={`https://image.tmdb.org/t/p/w500/${selectMovie.backdrop_path}`}/>
                        <h3>{selectMovie.title}</h3>
                        <p>{selectMovie.release_date}</p>
                        <p>{selectMovie.overview}</p>
                    </div>
                )
            }
        </div>
    );
};

export default MovieList;