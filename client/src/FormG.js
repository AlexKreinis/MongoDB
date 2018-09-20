import React, { Component } from 'react';
import './FormG.css';

class FormG extends Component {
  state = {
    formName: '',
    inputs: [
      {
        inputLabel: 'label',
        inputType: 'text',
        inputValue: 'value'
      }
    ],
    tempInput: {
      inputLabel: '',
      inputType: '',
      inputValue: ''
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(currentState => ({
      tempInput: { ...currentState.tempInput, [name]: value }
    }));
  };
  formName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const inputs = [...this.state.inputs, this.state.tempInput];
    this.setState({ inputs, tempInput: '' });
  };

  sendingData = () => {
    var inputs = this.state.inputs;
    console.log(inputs);
    fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify({ inputs: inputs })
    });
  };
  render() {
    const inputs = this.state.inputs.map((r, i) => (
      <div key={i}>
        {r.inputLabel}{' '}
        <input type={r.inputType} value={r.inputValue} label={r.inputLabel} />
      </div>
    ));
    const formName = this.state.formName;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Label:
          <input name="inputLabel" type="text" onChange={this.handleChange} />
          Type:
          <input name="inputType" type="text" onChange={this.handleChange} />
          Value
          <input name="inputValue" type="text" onChange={this.handleChange} />
          Form Name
          <input name="formName" type="text" onChange={this.formName} />
          <button>Submit</button>
        </form>

        <h1> The form : </h1>
        <h1>{formName}</h1>
        <div className="form">{inputs}</div>
        <button onClick={this.sendingData}>Submit</button>
      </div>
    );
  }
}
export default FormG;
