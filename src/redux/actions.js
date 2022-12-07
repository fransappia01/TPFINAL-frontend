export const POST_TASK = 'POST_TASK'
export const GET_TASKS = 'GET_TASKS'



export function postTasks() {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3000/api/todo').catch(error => alert(error.message))
		return dispatch({type: POST_TASK, payload: response.data})
	}
}

export function getTasks() {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3000/api/todo').catch(error => alert(error.message))
		return dispatch({type: GET_TASKS, payload: response.data})
	}
}