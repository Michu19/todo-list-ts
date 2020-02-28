import React, { Dispatch } from 'react'
import styled from 'styled-components';
import { myTheme } from '../styles/theme';
import { ITodo } from '../actions/TodoActions';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const UnCompletedItems = styled.div`
color: ${myTheme.colors.secondary};
display: ${myTheme.display.flex};
margin: ${myTheme.margin.m10};
border-radius: ${myTheme.borderRadius};
box-shadow: ${myTheme.shadow};
justify-content: ${myTheme.spaceBetween};
align-items: ${myTheme.centerItems};
:hover {
transform: scale(1.03);
}
transition: all 0.5s;
span {
display: ${myTheme.display.flex};
}
p {
  margin: ${myTheme.margin.m10};
  cursor: ${myTheme.cursor};
}
`

interface Props {
  todoItemList: ITodo[];
  changeStatus: any;
  dispatch: Dispatch<any>
  deleteItem: any;
  message: any;
  setEdit: any;
  setTodo: any;
  isEdit: any;
};
const TodoBoxes: React.FC<Props> = (props: Props) => {

return (
  <div>
      {props.todoItemList.map(item => (
          <UnCompletedItems key={item.id}>
            <p onClick={() => {
              props.changeStatus(item.id, item.completed)
              props.dispatch(props.message)
              }}>{item.title}</p>
            <span>
            <p onClick={() => {
              props.setEdit(props.isEdit)
              props.setTodo(item.id)
              }}><EditIcon /></p>
            <p onClick={() => props.deleteItem(item.id)}><DeleteIcon /></p>
            </span>
          </UnCompletedItems>
        ))}
  </div>
)
}

export default TodoBoxes;