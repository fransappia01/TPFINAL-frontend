import { POST_TASK, GET_TASKS} from './actions'


const initialState = {
	tasks: []
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case POST_TASK:
			return {

			}
		case GET_TASKS:
			return {
				
			}
	}
}

