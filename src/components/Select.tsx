import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { IPeople } from '../common/people';




interface Props {
  handleChange: (e:any) => void;
  people: IPeople[] ;
}
export default function SelectField(props: Props) {

  return (
    <>
      <FormControl variant="outlined">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={props.handleChange}
          defaultValue={0}
          >
          <MenuItem value={0}>Wszyscy</MenuItem>
          {props.people.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            )
          })}
        </Select>
        </FormControl>
    </>
  );
}