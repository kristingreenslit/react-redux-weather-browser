import { FETCH_WEATHER } from '../actions/index';

// state is an array b/c many cities are returned
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
  // state.push would mutate state vs. returning a new instance of state
    // return state.concat([action.payload.data]);
    // ES6 for the above:
    return [action.payload.data, ...state];
  }
	// console.log('Action received', action);
	return state;
}