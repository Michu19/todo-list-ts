import { combineReducers } from 'redux';
import { TodoReducer } from '../actions/TodoActions';


export const rootReducer = combineReducers({
   todoState: TodoReducer
});
