import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../../../components/Input';
import Button from '@material-ui/core/Button';
import { FormFlexCenter } from './FormsStyles'

export interface Props extends InjectedFormProps{
};

let AddForm: React.FC<Props> = (props: Props) => {
  const { handleSubmit } = props;
  return (
    <FormFlexCenter onSubmit={handleSubmit}>
      <Field name="title" component={Input} label="Tytuł" type="text" />
      <Button variant="contained" color="secondary" type="submit">Wyślij</Button>
    </FormFlexCenter>
  );
};

const AddTodoForm = reduxForm({
  form: 'addTodo'
})(AddForm);

export default connect(null)(AddTodoForm);