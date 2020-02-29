import { Middleware } from 'redux';
import { createBrowserHistory } from 'history';


type State = { field: 'string' }
const hashHistory = createBrowserHistory();


export const TestMiddleware: Middleware = api => next => action => {
  // Do stuff
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    hashHistory.push('dsadsa')
  }
};