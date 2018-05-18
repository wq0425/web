export default (state = [], action) => {
	switch (action.type) {
		case "danji":
			action.data[action.ind].flag = !action.data[action.ind].flag 
			return [...action.data]
		case "add":
			action.data[action.ind].flag = true
			action.data[action.ind].count += 1
			return [...action.data]
		case "jian":
			action.data[action.ind].flag = true
			action.data[action.ind].count -= 1
			if( action.data[action.ind].count <= 1){
				action.data[action.ind].count = 1
				action.data[action.ind].flag = false
			}
			return [...action.data]
		case "data":
			return action.data
		default:
			return state
	}
}