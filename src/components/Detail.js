import { Card, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from '../actions/capitalizeFirstLetterAction';
import BackBtn from "./BackBtn";
import classes from './Detail.module.css';
import Footer from "./Footer";
import Header from "./Header";

const Detail = () => {

    const { t } = useTranslation();

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

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

        setIsLoading(false);
    }, [cityName]);

    const dateConverter = (str, index) => {
        const originalDateTime = weatherData.list[index].dt_txt;
        const splitDateTime = originalDateTime.split(" ");
        const originalDate = splitDateTime[0];
        const splitDate = originalDate.split("-");
        const reversedDate = splitDate.reverse().join("-");
        return reversedDate;
    }

    return (
        <>
            <Header />
            <h1 className={classes.title}>{t('detailTitle')}</h1>
            <h2 className={classes.subtitle}>{weatherData.city ? ((weatherData.city.name + ", " + weatherData.city.country)) : "null"}. </h2>
            <div className={classes.container}>
                <Card className={classes.card} sx={{ maxWidth: 175 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.city ?
                        <div className='result'>
                            <p>{dateConverter(weatherData.list[0].dt_txt, 0)}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`} alt={weatherData.list[0].weather[0].description} />
                            <p>{parseInt(weatherData.list[0].main.temp)}ºC, {capitalizeFirstLetter(weatherData.list[0].weather[0].description)}</p>
                        </div>
                        : <p>{t('noInfo')}</p>
                    }
                </Card >
                <Card className={classes.card} sx={{ maxWidth: 175 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.city ?
                        <div className='result'>
                            <p>{dateConverter(weatherData.list[8].dt_txt, 8)}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.list[8].weather[0].icon}@2x.png`} alt={weatherData.list[8].weather[0].description} />
                            <p>{parseInt(weatherData.list[8].main.temp)}ºC, {capitalizeFirstLetter(weatherData.list[8].weather[0].description)}</p>
                        </div>
                        : <p>{t('noInfo')}</p>
                    }
                </Card >
                <Card className={classes.card} sx={{ maxWidth: 175 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.city ?
                        <div className='result'>
                            <p>{dateConverter(weatherData.list[16].dt_txt, 16)}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.list[16].weather[0].icon}@2x.png`} alt={weatherData.list[16].weather[0].description} />
                            <p>{parseInt(weatherData.list[16].main.temp)}ºC, {capitalizeFirstLetter(weatherData.list[16].weather[0].description)}</p>
                        </div>
                        : <p>{t('noInfo')}</p>
                    }
                </Card >
                <Card className={classes.card} sx={{ maxWidth: 175 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.city ?
                        <div className='result'>
                            <p>{dateConverter(weatherData.list[24].dt_txt, 24)}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.list[24].weather[0].icon}@2x.png`} alt={weatherData.list[24].weather[0].description} />
                            <p>{parseInt(weatherData.list[24].main.temp)}ºC, {capitalizeFirstLetter(weatherData.list[24].weather[0].description)}</p>
                        </div>
                        : <p>{t('noInfo')}</p>
                    }
                </Card >
                <Card className={classes.card} sx={{ maxWidth: 175 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.city ?
                        <div className='result'>
                            <p>{dateConverter(weatherData.list[32].dt_txt, 32)}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.list[32].weather[0].icon}@2x.png`} alt={weatherData.list[32].weather[0].description} />
                            <p>{parseInt(weatherData.list[32].main.temp)}ºC, {capitalizeFirstLetter(weatherData.list[32].weather[0].description)}</p>
                        </div>
                        : <p>{t('noInfo')}</p>
                    }
                </Card >
            </div >
            <BackBtn />
            <Footer />
        </>
    );

}

export default Detail;
