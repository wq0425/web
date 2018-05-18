const car = (state = [], action) => {
    switch (action.type) {
        case 'getCarData':
            return action.data;
            break;
        case 'getCarTypeData':
            return action.data;
            break;
        default:
            return state;
    }
}

export default car