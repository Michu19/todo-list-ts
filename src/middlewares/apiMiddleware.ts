import { Middleware } from 'redux';
import { history } from '../common/history';



export const ExceptionMiddleware: Middleware = api => next => action => {
   try{
     return next(action);
   }
   catch(err){
     history.push('/error');
   }
};