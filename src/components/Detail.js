import { Card, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackBtn from "./BackBtn";
import classes from './Detail.module.css';
import Footer from "./Footer";
import Header from "./Header";

const Detail = () => {

    const { cityName } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    const apiKey = "78443eb18af21291a56f3f322e836c61";

    useEffect(() => {
        setIsLoading(true);

        async function fetchData() {
            try {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`);

                const weatherDataByCity = await response.json();

                setWeatherData(weatherDataByCity);
                console.log(weatherDataByCity);

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

        setIsLoading(false);
    }, [cityName]);

    return (
        <>
            <Header />
            <h2>{weatherData.city ? weatherData.city.name : "null"} Forecast</h2>
            <div className={classes.container}>
                <Card className={classes.card} sx={{ maxWidth: 175 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.city ?
                        <div className='result'>
                            <p>Today's weather in... {weatherData.city.name}, {weatherData.city.country}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`} alt={weatherData.list[0].weather[0].description} />
                            <p>{parseInt(weatherData.list[0].main.temp)}ºC {weatherData.list[0].weather[0].description}</p>
                        </div>
                        : <p>There's no information for the data entered.</p>
                    }
                </Card >
                <Card className={classes.card} sx={{ maxWidth: 175 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.city ?
                        <div className='result'>
                            <p>Tomorrow's weather in... {weatherData.city.name}, {weatherData.city.country}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.list[12].weather[0].icon}@2x.png`} alt={weatherData.list[12].weather[0].description} />
                            <p>{parseInt(weatherData.list[12].main.temp)}ºC {weatherData.list[12].weather[0].description}</p>
                        </div>
                        : <p>There's no information for the data entered.</p>
                    }
                </Card >
                <Card className={classes.card} sx={{ maxWidth: 175 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.city ?
                        <div className='result'>
                            <p>The day after tomorrow's weather in... {weatherData.city.name}, {weatherData.city.country}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.list[24].weather[0].icon}@2x.png`} alt={weatherData.list[24].weather[0].description} />
                            <p>{parseInt(weatherData.list[24].main.temp)}ºC {weatherData.list[24].weather[0].description}</p>
                        </div>
                        : <p>There's no information for the data entered.</p>
                    }
                </Card >
            </div >
            <BackBtn />
            <Footer />
        </>
    );

}

export default Detail;
