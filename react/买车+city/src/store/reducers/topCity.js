const topCity = (state = [], action) => {
    switch (action.type) {
        case 'getTopCityData':
            return action.data;
            break;
        default:
            return state;
    }
}

export default topCity