import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

interface Props {
  input: any;
  label: string;
  children: JSX.Element
}

type SelectState ={
  position: number
}

export class renderSelectField extends Component<Props, SelectState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      position: 0
    }
  }

  render() {
    return (
      <FormControl variant="outlined">
        <Select
          {...this.props.input}
          inputProps={{
            name: this.props.input.name,
          }}
          value={this.state.position}
          onChange={(e: any) => this.setState({
            position: e.target.value
          })}
        >
          {this.props.children}
        </Select>
      </FormControl>
    )
  }
}