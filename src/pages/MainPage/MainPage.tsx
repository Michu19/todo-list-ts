import React, { useEffect, FC, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getTodoList, GetTodoListAction, ITodo, IAppState, addedTodo, deleteTodo, changeStatus , updateTodo } from '../../actions/TodoActions';
import { Grid, BoxItems, FlexCenter, Container } from './MainPageStyles';
import AddTodoForm from './Forms/AddForm';
import EditForm from './Forms/EditForm';
import CustomSnackbar from '../../components/Snackbar';
import { showSuccessSnackbar, showErrorSnackbar } from '../../actions/SnackbarActions';
import Button from '@material-ui/core/Button';
import { MainPageService } from '../../services/MainPageService';
import EditIcon from '@material-ui/icons/Edit';
import AlertDialog from '../../components/Dialog';
import ThemeContext from '../../context/ThemeContext';
import ToggleThemeButton from '../../components/ToogleThemeButton';
import DoneIcon from '@material-ui/icons/Done';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface IProps extends RouteComponentProps {
  getTodoList: () => Promise<GetTodoListAction>;
  todos: ITodo[];
  addedTodo: any;
  deleteTodo: (item: number) => void;
  changeStatus: (id: number, completed: boolean) => void;
  updateTodo: (values: any) => void;
}
const MainPage: FC<IProps> = ({ getTodoList, todos, addedTodo, deleteTodo, changeStatus, updateTodo }) => {

  const [isEdit, setIsEdit] = useState(false);
  const [todoId, setTodoId] = useState(0)
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);


  const renderAgree = (item: number) => {
    return (
      <React.Fragment>
        <div onClick={() => mainPageService.deleteTodoItem(item)}>Usuń</div>
      </React.Fragment>
    )
  }


  const uncompletedList = todos.filter(item => item.completed === false)
  const completedItems = todos.filter(item => item.completed === true)

  const mainPageService = new MainPageService(dispatch, todos, deleteTodo, addedTodo, updateTodo);

  return (
    <Container>
        <CustomSnackbar/>
            {!isEdit ?
        <ThemeContext.Consumer>
          {({ theme }) => <div>
            {isAdd ? <AddTodoForm onSubmit={(values) => {
              mainPageService.addSubmit(values);
              setIsAdd(!isAdd);
            }} /> : <FlexCenter><Button color="secondary" variant="contained" onClick={() => setIsAdd(!isAdd)}>Dodaj nowe zadanie</Button></FlexCenter>}
            <ToggleThemeButton />
              <Grid>
                  <div>
                  <h1>Nowe zadania</h1>
                  {uncompletedList.map(item => {
                    return (
                      <BoxItems id={item.title} style={theme} key={item.id}>
                        <p>{item.title}</p>
                        <span>
                          <div>
                            <DoneIcon onClick={() => {
                            changeStatus(item.id, item.completed)
                            dispatch(showSuccessSnackbar('Zmieniłeś status zadania na zakończone Panie!'))
                            }} />
                          </div>
                          <div onClick={() => {
                            setIsEdit(!isEdit)
                            setTodoId(item.id)
                            }}><EditIcon />
                            </div>
                          <AlertDialog title={item.title} agree={renderAgree(item.id)} disagree="Anuluj" />
                        </span>
                      </BoxItems>
                    )
                  })}
                </div>
                <div>
                <h1>Zakończone zadania</h1>
                  {completedItems.map(item => {
                    return (
                      <BoxItems id={item.title} style={theme} key={item.id}>
                        <p>{item.title}</p>
                        <span>
                          <div>
                            <ArrowBackIcon onClick={() => {
                            changeStatus(item.id, item.completed)
                            dispatch(showErrorSnackbar('Cofnąłeś zadanie do nowych zadań Panie!'))
                            }} />
                          </div>
                          <div onClick={() => {
                            setIsEdit(!isEdit)
                              setTodoId(item.id)
                          }}><EditIcon/>
                          </div>
                          <AlertDialog title={item.title} agree={renderAgree(item.id)} disagree="Anuluj" />
                        </span>
                      </BoxItems>
                    )
                  })}
                </div>
              </Grid>
            </div>}
        </ThemeContext.Consumer>
         : <>
          <EditForm onSubmit={(values) => { mainPageService.editSubmit(values, todoId); setIsEdit(!isEdit);}} /> 
          <Button variant="contained" color="default" onClick={() => setIsEdit(!isEdit)} >Anuluj</Button>
           </>}
    </Container>
  );
};

const mapStateToProps = (state: IAppState) => {
  console.log(state);
  return {
    todos: state.todoState.todos,
  };
}

export default connect(mapStateToProps, {
  getTodoList,
  addedTodo,
  deleteTodo,
  changeStatus, 
  updateTodo
})(MainPage);
