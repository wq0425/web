const home = (state = { title: "首页" }, action) => {
    return Object.assign({}, state, { title: action.title })
};
export default home