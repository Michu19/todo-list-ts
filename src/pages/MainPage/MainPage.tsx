import React, { useEffect, FC, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getTodoList, GetTodoListAction, ITodo, IAppState, addedTodo, deleteTodo, changeStatus , updateTodo, ITodolistState } from '../../actions/TodoActions';
import styled from 'styled-components';
import { myTheme } from '../../styles/theme';
import AddTodoForm from './Forms/AddForm';
import EditForm from './Forms/EditForm';
import CustomSnackbar from '../../components/Snackbar';
import { showSuccessSnackbar, showErrorSnackbar } from '../../actions/SnackbarActions';
import Button from '@material-ui/core/Button';

const CompletedItems = styled.div`
color: ${myTheme.colors.main};
display: ${myTheme.display.flex};
margin: ${myTheme.margin};
border-radius: ${myTheme.borderRadius};
box-shadow: ${myTheme.shadow};
p {
  margin: ${myTheme.margin};
  cursor: ${myTheme.cursor};
}
`
const UnCompletedItems = styled.div`
color: ${myTheme.colors.secondary};
display: ${myTheme.display.flex};
margin: ${myTheme.margin};
border-radius: ${myTheme.borderRadius};
box-shadow: ${myTheme.shadow};
p {
  margin: ${myTheme.margin};
  cursor: ${myTheme.cursor};
}
`

const Grid = styled.div`
display: ${myTheme.display.grid};
grid-template-columns: ${myTheme.gridTemplateColumns.high};
color: ${myTheme.colors.secondary};
justify-content: ${myTheme.gridCenterItems};
> div {
box-shadow: ${myTheme.shadow};
margin: ${myTheme.margin};
border-radius: ${myTheme.borderRadius};
}
`


interface IProps extends RouteComponentProps {
  getTodoList: () => Promise<GetTodoListAction>;
  todos: ITodo[];
  addedTodo: any;
  deleteTodo: (item: number) => void;
  changeStatus: any;
  updateTodo: any;
}
const MainPage: FC<IProps> = ({ getTodoList, todos, addedTodo, deleteTodo, changeStatus, updateTodo }) => {

  const [isEdit, setIsEdit] = useState(false);
  const [todoId, setTodoId] = useState(0)
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch()

    useEffect(() => {
        getTodoList();
    }, [getTodoList]);
  
  const uncompletedList = todos.filter(item => item.completed === false)
  const completedItems = todos.filter(item => item.completed === true)

  const addSubmit = (values: any): void => {
      addedTodo({
        userId: 1,
        id: todos.length + 1,
        title: values.title,
        completed: false
      });
      dispatch(showSuccessSnackbar('Dodałeś nowe zadanie Panie!'))
      setIsAdd(!isAdd)
    };

  const editSubmit = (values: any): void => {
      updateTodo({
        id: todoId,
        title: values.title
      }); 
      dispatch(showSuccessSnackbar('Zedytowałeś zadanie Panie!'))
      setIsEdit(!isEdit);
    };

  const deleteTodoItem = (item: number): void => {
      dispatch(showErrorSnackbar('Usunąłeś zadanie Panie!'))
      deleteTodo(item);
  }

  return (
    <div>
      <CustomSnackbar/>
      {!isEdit ?
      <div>
        {isAdd ? <AddTodoForm onSubmit={addSubmit} /> :  <Button variant="contained" onClick={() => setIsAdd(!isAdd)}>Dodaj nowe zadanie</Button>}
        <Grid>
          <div>
            {uncompletedList.map(item => (
              <UnCompletedItems key={item.id}>
                <p onClick={() => {
                  changeStatus(item)
                  dispatch(showSuccessSnackbar('Zmieniłeś status zadania na zakończone Panie!'))
                  }}>{item.title}</p>
                <p onClick={() => deleteTodoItem(item.id)}>X</p>
              </UnCompletedItems>
            ))}
          </div>
          <div>
            {completedItems.map(item => {
            return (
              <CompletedItems key={item.id}>
                <p onClick={() => {
                  changeStatus(item)
                  dispatch(showErrorSnackbar('Zmieniłeś status zadania na niezakończone Panie!'))
                  }}>{item.title}</p>
                <p onClick={() => {deleteTodoItem(item.id)}}>X</p>
                <p onClick={() => {
                  setIsEdit(!isEdit)
                  setTodoId(item.id)}}>Edit</p>
              </CompletedItems>
            )
            })}
          </div>
        </Grid>
      </div> : <EditForm onSubmit={editSubmit} />}
    </div>
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
