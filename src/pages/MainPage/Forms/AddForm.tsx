import React from 'react'
import { Field, reduxForm, Form, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../../../components/Input';
import Button from '@material-ui/core/Button';

export interface Props extends InjectedFormProps{
};

let AddForm: React.FC<Props> = (props: Props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="title" component={Input} label="Tytuł" type="text" />
      <Button variant="contained" type="submit">Wyślij</Button>
    </Form>
  );
};

const AddTodoForm = reduxForm({
  form: 'addTodo'
})(AddForm);

export default connect(null)(AddTodoForm);