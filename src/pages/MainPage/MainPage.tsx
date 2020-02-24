import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { getTodoList, GetTodoListAction, ITodo, IAppState } from '../../actions/TodoActions';

interface IProps {
  getTodoList: () => Promise<GetTodoListAction>;
  todos: ITodo[]
}


const MainPage: FC<IProps> = ({ getTodoList, todos }) => {

  useEffect(() => {
      getTodoList();
  }, [getTodoList]);

  const filterList = todos.filter(item => item.userId === 1)

  return (
    <div>
      {filterList.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
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
  getTodoList
})(MainPage);
