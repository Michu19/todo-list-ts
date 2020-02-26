import { Dispatch, Reducer } from "react";
import { Action } from 'redux';

export const SNACKBAR_CLEAR = 'SNACKBAR_CLEAR';
export const SNACKBAR_SUCCESS = 'SNACKBAR_SUCCESS';
export const SNACKBAR_ERROR = 'SNACKBAR_ERROR';

export interface ISnackbar {
  snackbar: {
  successSnackbarOpen: boolean,
  successSnackbarMessage: string,
  snackbarVariant: string
  }
}

export interface ISnackbarState {
  readonly message: string
};
export interface ShowSuccessSnackbarAction extends Action<'SNACKBAR_SUCCESS'> {
  message: string;
}
export interface ShowErrorSnackbarAction extends Action<'SNACKBAR_ERROR'> {
  message: string;
}
export interface ClearSnackbarAction {
  type: string;
}
export type SnackbarActions =
  | ShowSuccessSnackbarAction
  | ShowErrorSnackbarAction
  | ClearSnackbarAction


export const showSuccessSnackbar = (message:string) => {
  return (dispatch: Dispatch<ShowSuccessSnackbarAction>) => {
    dispatch({
      type: SNACKBAR_SUCCESS,
      message
    });
  };
};

export const showErrorSnackbar = (message:string) => {
  return (dispatch:Dispatch<ShowErrorSnackbarAction>) => {
    dispatch({
      type: SNACKBAR_ERROR,
      message
    });
  };
};

export const clearSnackbar = () => {
  return (dispatch: Dispatch<ClearSnackbarAction>) => {
    dispatch({
      type: SNACKBAR_CLEAR
    });
  };
};

const INITIAL_STATE: ISnackbar[] = [];

export const SnackBarReducer: Reducer<ISnackbar[], SnackbarActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SNACKBAR_SUCCESS:
      return {
        ...state,
        successSnackbarOpen: true,
        successSnackbarMessage: (action as ShowSuccessSnackbarAction).message,
        snackbarVariant: 'success'
      };
    case SNACKBAR_ERROR:
      return {
        ...state,
        successSnackbarOpen: true,
        successSnackbarMessage: (action as ShowSuccessSnackbarAction).message,
        snackbarVariant: 'error'
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        successSnackbarOpen: false,
        errorSnackbarOpen: false,
        infoSnackbarOpen: false
      };
    default:
      return state;
  }
};
  