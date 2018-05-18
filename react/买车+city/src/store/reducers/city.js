const city = (state = [], action) => {
    switch (action.type) {
        case 'getCityData':
            return action.data;
            break;
        default:
            return state;
    }
}

export default city