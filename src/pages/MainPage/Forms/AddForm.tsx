import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../../../components/Input';
import Button from '@material-ui/core/Button';
import { FormFlexCenter } from './FormsStyles'
import people from '../../../common/people';
import { renderSelectField }from '../../../components/SelectField';
import { MenuItem } from '@material-ui/core';

export interface Props extends InjectedFormProps {
};

let AddForm: React.FC<Props> = (props: Props) => {

  const { handleSubmit } = props;

  return (
    <FormFlexCenter onSubmit={handleSubmit}>
      <Field name="title" component={Input} label="Tytuł" type="text" />
      <Field name="userId" component={renderSelectField} label="Tytuł">
        <MenuItem value={0}>Wszyscy</MenuItem>
        {people.map((item: any) => {
          return (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          )
        })}

      </Field>
      <Button variant="contained" color="secondary" type="submit">Wyślij</Button>
    </FormFlexCenter>
  );
};

const AddTodoForm = reduxForm({
  form: 'addTodo',
})(AddForm);
export default connect(null)(AddTodoForm);