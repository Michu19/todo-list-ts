import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { getTodoList, GetTodoListAction, ITodo, IAppState, addedTodo, deleteTodo, changeStatus , updateTodo} from '../../actions/TodoActions';
import styled from 'styled-components';
import { myTheme } from '../../styles/theme';


const CompletedItems = styled.div`
color: ${myTheme.colors.main};
display: ${myTheme.display.flex};
margin: ${myTheme.margin};
p {
  margin: ${myTheme.margin};
  cursor: ${myTheme.cursor};
}
`
const UnCompletedItems = styled.div`
color: ${myTheme.colors.secondary};
display: ${myTheme.display.flex};
margin: ${myTheme.margin};
p {
  margin: ${myTheme.margin};
  cursor: ${myTheme.cursor};
}
`

const Grid = styled.div`
display: ${myTheme.display.grid};
grid-template-columns: ${myTheme.gridTemplateColumns.huge};
color: ${myTheme.colors.secondary};
justify-content: ${myTheme.gridCenterItems};
`


interface IProps {
  getTodoList: () => Promise<GetTodoListAction>;
  todos: ITodo[];
  addedTodo: any;
  deleteTodo: any;
  changeStatus: any;
  updateTodo: any;
}
const MainPage: FC<IProps> = ({ getTodoList, todos, addedTodo, deleteTodo, changeStatus, updateTodo }) => {

  useEffect(() => {
      getTodoList();
  }, [getTodoList]);
  

  const uncompletedList = todos.filter(item => item.completed === false)
  const completedItems = todos.filter(item => item.completed === true)

  const data = ({
    userId: 1,
    id: todos.length + 1,
    title: 'Zmockuj dane',
    completed: true
  })


  return (
    <div>
      <Grid>
        <div>
          {uncompletedList.map(item => (
            <UnCompletedItems key={item.id}>
              <p onClick={() => changeStatus(item)}>{item.title}</p>
              <p onClick={() => deleteTodo(item)}>X</p>
            </UnCompletedItems>
          ))}
        </div>
        <div>
          {completedItems.map(item => {
              const updateData = ({
                id: item.id,
                title: 'Maszeruj',
              });
            return (
              <CompletedItems key={item.id}>
                <p onClick={() => changeStatus(item)}>{item.title}</p>
                <p onClick={() => deleteTodo(item)}>X</p>
                <p onClick={() => updateTodo(updateData)}>Edit</p>
              </CompletedItems>
            );})}
        </div>
      </Grid>
      <button onClick={() => addedTodo(data)}>Sumbit </button>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => {
  console.log(state);
  return {
    todos: state.todoState.todos
  };
}

export default connect(mapStateToProps, {
  getTodoList, addedTodo, deleteTodo, changeStatus, updateTodo
})(MainPage);
