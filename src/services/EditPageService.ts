import { Dispatch } from "react";
import { showSuccessSnackbar } from "../actions/SnackbarActions";
import Strings from "../common/Strings";

export class EditPageService {

  private dispatch: Dispatch<any>;
  private updateTodo: (values: any) => void;


  constructor(dispatch: Dispatch<any>, updateTodo: (values: any) => void) {
    this.updateTodo = updateTodo;
    this.dispatch = dispatch;

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