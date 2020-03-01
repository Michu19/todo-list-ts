import React from 'react'
import { ITodo } from '../actions/TodoActions';
import { BoxItems } from '../pages/MainPage/MainPageStyles';
import { history } from '../common/history';
import { CSSProperties } from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import AlertDialog from './Dialog';
import { SvgIconProps } from '@material-ui/core';
import { TodoGroup } from '../common/enums/todoEnum';

export interface Props {
  items: ITodo[];
  actionService: any;
  type: TodoGroup,
  style: CSSProperties;
};
const TodoList: React.FC<Props> = (props: Props) => {

  const renderAgree = (item: number) => {
    return (
      <React.Fragment>
        <div onClick={() => props.actionService.deleteTodoItem(item)}>Usuń</div>
      </React.Fragment>
    )
  }
  const TodoIcon = (iconProps: SvgIconProps) =>{
    return props.type === TodoGroup.Completed ? <ArrowBackIcon {...iconProps} /> : <DoneIcon {...iconProps}/>
  }


  return (
    <div>
      {props.items.map(item => {
        return (
          <BoxItems id={item.title} style={props.style} key={item.id}>
            <p>{item.title}</p>
            <span>
              <div>
                <TodoIcon onClick={() => { props.actionService.changeTodoStatus(item.id, item.completed) }} />
              </div>
              <div onClick={() => {
                history.push(`/edit/${item.id}`)
              }}><EditIcon />
              </div>
              <AlertDialog title={item.title} agree={renderAgree(item.id)} disagree="Anuluj" />
            </span>
          </BoxItems>
        )
      })}
    </div>
  )

};


export default (TodoList);