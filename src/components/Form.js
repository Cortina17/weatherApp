import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import classes from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addCityToHistory } from '../actions/addCityAction';

const Form = () => {
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
            const weatherDataByCity = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${formulario.city}&limit=1&appid=${apiKey}`)
                .then((response) => (response).json())
                .catch(error => {
                    console.error(error);
                });

            // Llamada por coodernadas
            const cityLatData = weatherDataByCity[0].lat;
            const cityLonData = weatherDataByCity[0].lon;

            const weatherDataByCoords = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLatData}&lon=${cityLonData}&limit=1&units=metric&appid=${apiKey}`)
                .then((response) => (response).json())
                .catch(error => {
                    console.error(error);
                });

            setWeatherData(weatherDataByCoords);
            console.log(weatherDataByCoords);

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

            const weatherByZipData = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${formulario.zipCode},${formulario.country}&appid=${apiKey}`)
                .then((response) => (response).json())
                .catch(error => {
                    console.error(error);
                });

            // Llamada por coodernadas
            const cityLatData = weatherByZipData.lat;
            const cityLonData = weatherByZipData.lon;

            const weatherDataByCoords = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLatData}&lon=${cityLonData}&limit=1&units=metric&appid=${apiKey}`)
                .then((response) => (response).json())
                .catch(error => {
                    console.error(error);
                });

            setWeatherData(weatherDataByCoords);
            console.log(weatherDataByCoords);

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
                            <h3>Get your weather info here!</h3>
                            <h5>Please, fill only the city field or both ZIP code and country.</h5>
                            <div className={classes.input}>
                                <TextField
                                    id="city"
                                    name="city"
                                    label="City"
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
                                    label="ZIP Code"
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
                                    label="Country Code"
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
                                variant="outlined"
                                endIcon={<SearchIcon />}
                                className={classes.btn}
                            >
                                Search
                            </Button>
                        </CardActions>
                    </form>
                </Card >

                <Card className={classes.card} sx={{ minWidth: 275 }}>
                    {isLoading ? <CircularProgress /> : null}
                    {weatherData.name ?
                        <div className='result'>
                            <p>Today's weather in... {weatherData.name}, {weatherData.sys.country}.</p>
                            <img id='weatherIcon' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
                            <p>{parseInt(weatherData.main.temp)}ºC {weatherData.weather.description}</p>
                        </div>
                        : <p>There's no information for the data entered.</p>
                    }
                </Card>
            </div>
        </>
    );
}

export default Form;
