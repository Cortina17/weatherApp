import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addCityToHistory } from '../actions/addCityAction';
import { capitalizeFirstLetter } from '../actions/capitalizeFirstLetterAction';
import classes from './Form.module.css';
import i18n from '../i18n';

const Form = () => {

    const { t } = useTranslation();
    const lang = i18n.resolvedLanguage;

    const [isLoading, setIsLoading] = useState(false);
    const [cityInputValue, setCityInputValue] = useState("");
    const [zipInputValue, setZipInputValue] = useState("");
    const [countryInputValue, setCountryInputValue] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [formulario, setFormulario] = useState({
        city: "",
        zipCode: "",
        country: ""
    });

    const apiKey = "78443eb18af21291a56f3f322e836c61";

    const handleCityInputChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
        setCityInputValue(e.target.value);
    };

    const handleZipInputChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
        setZipInputValue(e.target.value);
    };

    const handleCountryInputChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
        setCountryInputValue(e.target.value);
    };

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        //Llamada por ciudad
        if (formulario.city) {
            const weatherDataByCity = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${formulario.city}&limit=1&appid=${apiKey}&lang=${lang}`)
                .then((response) => (response).json())
                .catch(error => {
                    console.error(error);
                });

            // Llamada por coodernadas
            const cityLatData = weatherDataByCity[0].lat;
            const cityLonData = weatherDataByCity[0].lon;

            const weatherDataByCoords = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLatData}&lon=${cityLonData}&limit=1&units=metric&appid=${apiKey}&lang=${lang}`)
                .then((response) => (response).json())
                .catch(error => {
                    console.error(error);
                });

            setWeatherData(weatherDataByCoords);

            dispatch(
                addCityToHistory({
                    cityName: weatherDataByCoords.name,
                    temp: parseInt(weatherDataByCoords.main.temp) + "ºC",
                    description: weatherDataByCoords.weather[0].description
                })
            );
        }

        //Llamada por codigo postal
        if (formulario.zipCode && formulario.country) {

            const weatherByZipData = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${formulario.zipCode},${formulario.country}&appid=${apiKey}&lang=${lang}`)
                .then((response) => (response).json())
                .catch(error => {
                    console.error(error);
                });

            // Llamada por coodernadas
            const cityLatData = weatherByZipData.lat;
            const cityLonData = weatherByZipData.lon;

            const weatherDataByCoords = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLatData}&lon=${cityLonData}&limit=1&units=metric&appid=${apiKey}&lang=${lang}`)
                .then((response) => (response).json())
                .catch(error => {
                    console.error(error);
                });

            setWeatherData(weatherDataByCoords);

            dispatch(
                addCityToHistory({
                    cityName: weatherDataByCoords.name,
                    temp: parseInt(weatherDataByCoords.main.temp) + "ºC",
                    description: weatherDataByCoords.weather[0].description
                })
            );
        }

        setCityInputValue("");
        setZipInputValue("");
        setCountryInputValue("");

        setFormulario({
            city: "",
            zipCode: "",
            country: ""
        });

        setIsLoading(false);
    };

    return (
        <>
            <div className={classes.container}>
                <Card className={classes.card} sx={{ minWidth: 275 }}>
                    <form onSubmit={handleSubmit}>
                        <CardContent className={classes.content}>
                            <h3>{t('fieldTitle')}</h3>
                            <h5>{t('fieldSubTitle')}</h5>
                            <div className={classes.input}>
                                <TextField
                                    id="city"
                                    name="city"
                                    label={t('cityLabel')}
                                    placeholder='Barcelona'
                                    variant="filled"
                                    margin="dense"
                                    size='small'
                                    value={cityInputValue}
                                    disabled={(zipInputValue || countryInputValue) !== ''}
                                    onChange={handleCityInputChange}
                                />
                                <Divider className={classes.divider} />
                                <TextField
                                    id="zip"
                                    name="zipCode"
                                    label={t('zipLabel')}
                                    placeholder='08001'
                                    variant="filled"
                                    margin="dense"
                                    size='small'
                                    value={zipInputValue}
                                    disabled={cityInputValue !== ''}
                                    onChange={handleZipInputChange}
                                />
                                <TextField
                                    id="country"
                                    name="country"
                                    label={t('countryLabel')}
                                    placeholder='ES'
                                    variant="filled"
                                    margin="dense"
                                    size='small'
                                    required={(zipInputValue !== '')}
                                    value={countryInputValue}
                                    disabled={cityInputValue !== ''}
                                    onChange={handleCountryInputChange}
                                />
                            </div>
                        </CardContent>
                        <CardActions className={classes.actions}>
                            <Button
                                type='submit'
                                size='small'
                                variant="contained"
                                endIcon={<SearchIcon />}
                                sx={{
                                    backgroundColor: '#5291C9',
                                    '&:hover': { outlineColor: 'forestgreen', backgroundColor: 'forestgreen', color: 'white' }
                                }}                            >
                                {t('searchBtn')}
                            </Button>
                        </CardActions>
                    </form>
                </Card >

                <Card className={classes.resultCard} sx={{ minWidth: 275 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.name ?
                        <div className={classes.result}>
                            <p>{t('info')} {weatherData.name}, {weatherData.sys.country}.</p>
                            <div id='weatherIcon'>
                                <img
                                    className={classes.img}
                                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                    alt={weatherData.weather[0].description}
                                />
                            </div>
                            <p>{parseInt(weatherData.main.temp)}ºC, {capitalizeFirstLetter(weatherData.weather[0].description)}.</p>
                        </div>
                        : <p>{t('noInfo')}</p>
                    }
                </Card>
            </div>
        </>
    );
}

export default Form;
