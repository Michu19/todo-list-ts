import { createStore, applyMiddleware, Store, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { IAppState } from '../actions/TodoActions';
import { ISnackbar } from '../actions/SnackbarActions';
import {createLogger } from 'redux-logger';
import { ExceptionMiddleware } from '../middlewares/apiMiddleware';


const middlewares: Middleware<any, any, any>[] = [];

middlewares.push(ExceptionMiddleware);
middlewares.push(thunk);
const loggerMiddleware = createLogger({
   predicate: () => process.env.NODE_ENV === 'development',
});
middlewares.push(loggerMiddleware);

export function configureStore(): Store<IAppState | ISnackbar, any> {

   return createStore(rootReducer, compose(applyMiddleware(...middlewares)));

}

