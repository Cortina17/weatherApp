import { ADD_CITY_TO_HISTORY } from "../actions/addCityAction"

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY_TO_HISTORY:
            return {
                ...state,
                searchHistory: [...state.searchHistory, action.payload]
            };
        default:
            return state;
    }
}

const initialState = {
    weatherData: {},
    searchHistory: []
}


export default weatherReducer;