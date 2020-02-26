import React from 'react'
import { Field, reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../../../components/Input';
import Button from '@material-ui/core/Button';

interface Props {};

let EditForm: React.FC<Props> = (props: any) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="title" component={Input} label="Tytuł" type="text" />
      <Button variant="contained" type="submit">Wyślij</Button>
    </Form>
  );
};

const EditTodoForm = reduxForm({
  form: 'editTodo'
})(EditForm);

export default connect(null)(EditTodoForm);