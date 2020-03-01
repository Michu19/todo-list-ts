import { Dispatch } from "react";
import { showSuccessSnackbar } from "../actions/SnackbarActions";
import {  ITodo } from "../actions/TodoActions";
import Strings from "../common/Strings";

export class MainPageService {

  private dispatch: Dispatch<any>;
  private deleteTodo: (item: number) => void;
  private addedTodo: (values: any) => void;
  private updateTodo: (values: any) => void;
  private fetchData: (res: ITodo[]) => void;
  private todos: ITodo[];
  private changeStatus: (id: number, completed: boolean) => void;


  constructor(dispatch: Dispatch<any>, todos: ITodo[], deleteTodo: (item: number) => void, 
    addedTodo: (values: any) => void, updateTodo: (values: any) => void, fetchData: (res: ITodo[]) => void,
    changeStatus: (id: number, completed: boolean) => void) {
    this.dispatch = dispatch;
    this.deleteTodo = deleteTodo;
    this.addedTodo = addedTodo;
    this.updateTodo = updateTodo;
    this.fetchData = fetchData;
    this.todos = todos;
    this.changeStatus = changeStatus;
  }

  fetchApi = (values: ITodo[]): void =>{
    this.fetchData(values);
  }

  deleteTodoItem = (item: number): void => {
    this.deleteTodo(item);
    this.dispatch(showSuccessSnackbar(Strings.DeleteTodo));
  };

  addSubmit = (values: ITodo): void => {
    console.log(values);
    this.addedTodo({
      userId: Number(values.userId),
      id: this.todos.length + 1,
      title: values.title,
      completed: false
    });
    this.dispatch(showSuccessSnackbar(Strings.AddTodo));
  }

  changeTodoStatus = (id: number, completed: boolean) => {

    this.changeStatus(id, completed)
    
    this.dispatch(showSuccessSnackbar(completed ? Strings.ChangeStatus.back : Strings.ChangeStatus.update))

  }


  editSubmit = (values: any, todoId: number): void => {
    this.updateTodo({
      id: todoId,
      title: values.title
    }); 
    this.dispatch(
          showSuccessSnackbar(
            `${Strings.EditTodo} ${values.title}`
          )
        );
  }


}