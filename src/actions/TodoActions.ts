import { Action } from 'redux';
import axios from 'axios'; 
import { ThunkAction } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { Dispatch, Reducer } from 'react';

export const GET_TODO_LIST = 'GET_TODO_LIST';

export interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface ITodolistState {
  readonly todos: ITodo[],
};

export interface IAppState {
  readonly todoState: ITodolistState;
}

export interface GetTodoListAction extends Action<"GET_TODO_LIST"> {
  todos: ITodo[];
}


export type TodoActions = GetTodoListAction;


export const jsonAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    }
});




export const getTodoList: ActionCreator<ThunkAction<Promise<GetTodoListAction>, ITodo[], null, GetTodoListAction>> = () =>{
  return async (dispatch: Dispatch<GetTodoListAction>) =>{


    const todos = await jsonAxios.get<ITodo[]>("/todos").then( (res) =>{
      return res.data;
    })
    const getTodosAction: GetTodoListAction = {
      todos,
      type: GET_TODO_LIST
    }

    dispatch(getTodosAction);

    return getTodosAction;
  };
};

const initialState: ITodolistState = {
  todos: []
};


export const TodoReducer: Reducer<ITodolistState, TodoActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        todos: action.todos
      }
    default:
      return state;
  }

};

