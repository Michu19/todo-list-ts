// components/SuccessSnackbar.js or whatever you wanna call it
import React from 'react';
import { useDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { amber, green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { AlertProps } from '@material-ui/lab/Alert';
import { clearSnackbar } from '../actions/SnackbarActions';
import {RootState} from '../reducers/index';

export default function CustomSnackbar() {
  const dispatch = useDispatch();

  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

  const { successSnackbarOpen, snackbarVariant, successSnackbarMessage } = useSelector( state => state.snackbar)

  const useStyles1 = makeStyles(theme => ({
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: "flex",
      alignItems: "center"
    }
  }));

  function handleClose() {
    dispatch(clearSnackbar());
  }
  interface Props extends AlertProps {
    message: string;
  }

  function MySnackbarContentWrapper(props: Props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;

    return (
      <SnackbarContent
        className={clsx(classes[snackbarVariant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
        {...other}
      />
    );
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={successSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant={snackbarVariant}
          message={successSnackbarMessage}
        />
      </Snackbar>
    </div>
  );
}

