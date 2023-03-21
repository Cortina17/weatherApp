import { Card, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from '../actions/capitalizeFirstLetterAction';
import BackBtn from "./BackBtn";
import classes from './Detail.module.css';
import Footer from "./Footer";
import Header from "./Header";
import i18n from "../i18n";

const Detail = () => {

    const { t } = useTranslation();
    const lang = i18n.resolvedLanguage;

    const { cityName } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    const apiKey = "78443eb18af21291a56f3f322e836c61";

    useEffect(() => {

        setIsLoading(true);

        async function fetchData() {
            try {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=${lang}`);

                const weatherDataByCity = await response.json();

                setWeatherData(weatherDataByCity);

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

        setIsLoading(false);
    }, [cityName, lang]);

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
                {[0, 8, 16, 24, 32].map((index) => (
                    <Card key={index} className={classes.card} sx={{ minWidth: 175, maxWidth: 250 }}>
                        {isLoading ? <CircularProgress /> : null}
                        {weatherData.city ?
                            <div className={classes.result}>
                                <p>{dateConverter(weatherData.list[index].dt_txt, index)}</p>
                                <img
                                    className={classes.img}
                                    src={`http://openweathermap.org/img/wn/${weatherData.list[index].weather[0].icon}@2x.png`}
                                    alt={weatherData.list[index].weather[0].description}
                                />
                                <p>{parseInt(weatherData.list[index].main.temp)}ºC, {capitalizeFirstLetter(weatherData.list[index].weather[0].description)}</p>
                            </div>
                            : <p>{t('noInfo')}</p>
                        }
                    </Card>
                ))}
            </div>
            <BackBtn />
            <Footer />
        </>
    );
}

export default Detail;
