const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state }
        case 'bla':
            return { ...state }
        default:
            return { ...state }
    }
}

const createData = (cityName, temp, description) => {
    return { cityName, temp, description };
}

const initialState = {
    rows: [
        createData('Dublin', "4ºC", 'Clear'),
        createData('Rome', "16ºC", 'Cloudy'),
        createData('Madrid', "17ºC", 'Foggy'),
        createData('Toronto', "0ºC", 'Snow'),
        createData('Tokyo', "13ºC", 'Clear')
    ]
}


export default weatherReducer;