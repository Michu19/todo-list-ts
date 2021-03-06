import { Action } from 'redux';
import { Dispatch, Reducer } from 'react';

export const FETCH_TODO_LIST = 'FETCH_TODO_LIST';
export const GET_TODO_LIST = 'GET_TODO_LIST';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const UPDATE_TODO = 'UPDATE_TODO';

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

export interface FetchTodolistAction extends Action<"FETCH_TODO_LIST"> {
  todos: ITodo[];
}
export interface AddTodoAction extends Action<"ADD_TODO"> {
  todos: ITodo;
}
export interface DeleteTodoAction extends Action<"DELETE_TODO"> {
  id: number;
}
export interface ChangeStatusAction extends Action<"CHANGE_STATUS"> {
  id: number,
  completed: boolean;
}
export interface UpdateTodoAction extends Action<'UPDATE_TODO'> {
  todos: ITodo;
}

export type TodoActions =
  | FetchTodolistAction
  | AddTodoAction
  | DeleteTodoAction
  | ChangeStatusAction
  | UpdateTodoAction;




export const fetchData = (data: ITodo[]) =>{
  return (dispatch: Dispatch<FetchTodolistAction>) => {
    dispatch({
      todos: data,
      type: FETCH_TODO_LIST
    })
  }
}

export const addedTodo = (data: ITodo) => ({
  todos: data,
  type: ADD_TODO
})

export const deleteTodo = (id: number) => ({
  id,
  type: DELETE_TODO
})

export const changeStatus = (id: number, completed: boolean) => ({
  id,
  completed,
  type: CHANGE_STATUS
})

export const updateTodo = (title: string) => ({
  todos: title,
  type: UPDATE_TODO
});


const initialState: ITodolistState = {
  todos: []
};


export const TodoReducer: Reducer<ITodolistState, TodoActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_TODO_LIST:{
      return {
        ...state,
        todos: action.todos
      }
    }
    case ADD_TODO: 
      return {
        ...state,
        todos: [...state.todos, action.todos]
      }
    case DELETE_TODO:
      return {
        todos: state.todos.filter(items => items.id !== action.id)
      }
    case CHANGE_STATUS:
      return {
        todos: state.todos.map(item => (item.id === action.id ? { ...item, completed: !action.completed } : item))
      }
    case UPDATE_TODO:
      return {
        todos: state.todos.map(item => (item.id === action.todos.id ?  {...item, title: action.todos.title } : item))
      }
    default:
      return state;
  }

};

