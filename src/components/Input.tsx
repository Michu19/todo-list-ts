import React from 'react';
import TextField from '@material-ui/core/TextField';

interface InputProps {
  label: string,
  input: any,
  value: string
}

export default function Input({ label, input }: InputProps) {

  return (
    <div>
      <TextField id="outlined-basic" required label={label} variant="outlined" {...input} />
    </div>
  );
}