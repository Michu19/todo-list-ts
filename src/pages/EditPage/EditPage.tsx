import React, { FC } from 'react';
import EditForm from './EditForm';
import Button from '@material-ui/core/Button';
import { useDispatch, connect } from 'react-redux';
import { updateTodo } from '../../actions/TodoActions';
import { EditPageService } from '../../services/EditPageService';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { Container } from '../MainPage/MainPageStyles';
import { history } from '../../common/history';

interface Props extends RouteComponentProps<any> {
  updateTodo: (values: any) => void;
}

const EditPage: FC<Props> = ({ updateTodo }) => {
  const { id }  = useParams();
  const dispatch = useDispatch();
  const editPageService = new EditPageService(dispatch, updateTodo);

  return (
    <Container>
      <EditForm onSubmit={(values) => { editPageService.editSubmit(values, Number(id)); history.push('/') }} />
      <Button variant="contained" color="default" onClick={() => history.push('/')} >Anuluj</Button>
    </Container>

  );
};


export default connect(null, {
  updateTodo
})(EditPage);