export const ADD_CITY_TO_HISTORY = "ADD_CITY_TO_HISTORY";

export const addCityToHistory = (cityName, temp, description) => {
    return {
        type: ADD_CITY_TO_HISTORY,
        payload: cityName, temp, description
    }
}