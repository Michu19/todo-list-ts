import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { IAppState } from '../actions/TodoActions';
import { ISnackbar } from '../actions/SnackbarActions';

let middleware = applyMiddleware(thunk);

export function configureStore(): Store<IAppState | ISnackbar, any> {

   return createStore(rootReducer, middleware);

}

