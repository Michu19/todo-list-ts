import { Dispatch } from "react";
import { showSuccessSnackbar } from "../actions/SnackbarActions";
import {  ITodo } from "../actions/TodoActions";

export class MainPageService {

  private dispatch: Dispatch<any>;
  private deleteTodo: (item: number) => void;
  private addedTodo: (values: any) => void;
  private updateTodo: (values: any) => void;
  private todos: ITodo[];


  constructor(dispatch: Dispatch<any>, todos: ITodo[], deleteTodo: (item: number) => void, 
    addedTodo: (values: any) => void, updateTodo: (values: any) => void) {
    this.dispatch = dispatch;
    this.deleteTodo = deleteTodo;
    this.addedTodo = addedTodo;
    this.updateTodo = updateTodo;
    this.todos = todos;
  }

  deleteTodoItem = (item: number): void => {
    this.dispatch(showSuccessSnackbar("Udało Ci się usunąć!"));
    this.deleteTodo(item);
  };

  addSubmit = (values: any): void => {
    this.dispatch(showSuccessSnackbar('Dodałeś nowe zadanie Panie!'))
    this.addedTodo({
      userId: 1,
      id: this.todos.length + 1,
      title: values.title,
      completed: false
    });
  }

  editSubmit = (values: any, todoId: number): void => {
    this.updateTodo({
      id: todoId,
      title: values.title
    }); 
  }


}