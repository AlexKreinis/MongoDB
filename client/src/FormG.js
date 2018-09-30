import React, { Component } from 'react';

import './FormG.css';

class FormG extends Component {
  state = {
    formName: '',
    inputs: [],
    tempInput: {
      inputLabel: '',
      inputType: 'Please select a type',
      inputValue: ''
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(currentState => ({
      tempInput: { ...currentState.tempInput, [name]: value }
    }));
  };
  onSelect = ({ target }) => {
    const { tempInput } = this.state;
    tempInput.inputType = target.value;
    this.setState({ tempInput });
  };
  formName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const inputs = [...this.state.inputs, this.state.tempInput];
    const tempInput = { inputLabel: '', inputType: '', inputValue: '' };
    this.setState({ inputs, tempInput });
    const { elements } = e.target;
    elements['inputLabel'].value = '';
    elements['inputValue'].value = '';
    tempInput.inputType = 'Please select a type';
    this.setState({ tempInput });
  };

  sendingData = () => {
    var inputs = this.state.inputs;
    var formName = this.state.formName;
    console.log(inputs);
    fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify({ formName: formName, inputs: inputs }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.props.history.push('/');
  };
  render() {
    const inputs = this.state.inputs.map((r, i) => (
      <div key={i}>
        <label htmlFor={r.inputLabel}> {r.inputLabel} </label>
        <input
          type={r.inputType}
          placeholder={r.inputValue}
          id={r.inputLabel}
        />
      </div>
    ));

    const formName = this.state.formName;
    const value = this.state.tempInput.inputType;
    const types = ['text', 'color', 'date', 'email', 'tel', 'number'];
    return (
      <div className="formG">
        <form className="form-maker" onSubmit={this.handleSubmit}>
          Label:
          <input name="inputLabel" type="text" onChange={this.handleChange} />
          Type:
          <select onChange={this.onSelect}>
            <option selected={value === ''}>Please select a type</option>
            {types.map(val => (
              <option key={val} value={val} selected={val === value}>
                {val}
              </option>
            ))}
          </select>
          Value
          <input name="inputValue" type="text" onChange={this.handleChange} />
          Form Name
          <input name="formName" type="text" onChange={this.formName} />
          <button>Submit</button>
        </form>

        <div className="form-display">
          <h1> The Form </h1>
          <h2>Form Name : {formName}</h2>
          {inputs}
          <button onClick={this.sendingData}>Submit</button>
        </div>
      </div>
    );
  }
}
export default FormG;
