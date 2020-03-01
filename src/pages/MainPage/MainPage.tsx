import React, { useEffect, FC, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { fetchData, ITodo, IAppState, addedTodo, deleteTodo, changeStatus , updateTodo } from '../../actions/TodoActions';
import { Grid, FlexCenter, Container } from './MainPageStyles';
import AddTodoForm from './Forms/AddForm';
import CustomSnackbar from '../../components/Snackbar';
import { showErrorSnackbar } from '../../actions/SnackbarActions';
import Button from '@material-ui/core/Button';
import { MainPageService } from '../../services/MainPageService';
import ThemeContext from '../../context/ThemeContext';
import ToggleThemeButton from '../../components/ToogleThemeButton';
import { apiService } from '../../services/apiService';
import Strings from '../../common/Strings';
import TodoList from '../../components/TodoList';
import { TodoGroup } from '../../common/enums/todoEnum';
import SelectField from '../../components/Select';
import people from '../../common/people';

interface IProps extends RouteComponentProps {
  fetchData: (res: ITodo[]) => void;
  todos: ITodo[];
  addedTodo: (data: ITodo) => void;
  deleteTodo: (item: number) => void;
  changeStatus: (id: number, completed: boolean) => void;
  updateTodo: (values: any) => void;
}
const MainPage: FC<IProps> = ({ todos, addedTodo, deleteTodo, changeStatus, updateTodo, fetchData }) => {

  const [isAdd, setIsAdd] = useState(false);
  const [listItems, setlistItems] = useState<ITodo[]>([])
  const dispatch = useDispatch();

  const mainPageService = new MainPageService(dispatch, todos, deleteTodo, addedTodo, updateTodo, fetchData, changeStatus );
  const _apiService = new apiService();

  useEffect(() => {
    if(todos.length > 0) return;
    _apiService.getTodos().then((res: ITodo[]) => {
      mainPageService.fetchApi(res);
    }).catch(err =>{
      dispatch(showErrorSnackbar(Strings.BadRequestExceptions.data));
    });
  },[_apiService, dispatch, mainPageService, todos]);

  useEffect(() => {
    setlistItems(todos)
  }, [todos])

  const uncompletedList = listItems.filter(item => item.completed === false);
  const completedItems = listItems.filter(item => item.completed === true);
  const filterTodos = (e: any) => e.target.value === 0 ? setlistItems(todos) : setlistItems(todos.filter(item => item.userId === Number(e.target.value)))
  
  return (
    <Container>
        <CustomSnackbar/>
        <ThemeContext.Consumer>
          {({ theme }) => <div>
            {isAdd ? <AddTodoForm onSubmit={(values) => {
              mainPageService.addSubmit(values as ITodo);
              setIsAdd(!isAdd);
            }} /> : <FlexCenter><Button color="secondary" variant="contained" onClick={() => setIsAdd(!isAdd)}>Dodaj nowe zadanie</Button></FlexCenter>}
                <ToggleThemeButton />
                <SelectField people={people} handleChange={filterTodos} />
                <Grid>
                  <div>
                    <h1>Nowe zadania</h1>
                    <TodoList type={TodoGroup.Uncompleted} items={uncompletedList} style={theme} actionService={mainPageService} />
                  </div>
                  <div>
                    <h1>Zakończone zadania</h1>
                    <TodoList type={TodoGroup.Completed} items={completedItems} style={theme} actionService={mainPageService} />
                  </div>
                </Grid>
            </div>}
        </ThemeContext.Consumer>

    </Container>
  );
};



const mapStateToProps = (state: IAppState) => {
  return {
    todos: state.todoState.todos,
  };
}

export default connect(mapStateToProps, {
  fetchData,
  addedTodo,
  deleteTodo,
  changeStatus, 
  updateTodo
})(MainPage);
