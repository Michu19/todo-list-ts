import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { IAppState } from '../actions/TodoActions';

let middleware = applyMiddleware(thunk);

export function configureStore(): Store<IAppState, any> {

   return createStore(rootReducer, undefined, middleware);

}

