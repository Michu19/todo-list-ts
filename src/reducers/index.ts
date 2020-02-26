import { combineReducers } from 'redux';
import { TodoReducer } from '../actions/TodoActions';
import { SnackBarReducer } from '../actions/SnackbarActions';
import { reducer as formReducer } from 'redux-form';


export const rootReducer = combineReducers({
   todoState: TodoReducer,
   snackbar: SnackBarReducer,
   form: formReducer
});
export type RootState = ReturnType<typeof rootReducer>