import React, { Component } from 'react';

import './FormG.css';

class FormG extends Component {
  state = {
    formName: '',
    inputs: [],
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
    const tempInput = { inputLabel: '', inputType: '', inputValue: '' };
    this.setState({ inputs, tempInput });
    const { elements } = e.target;
    elements['inputLabel'].value = '';
    elements['inputType'].value = '';
    elements['inputValue'].value = '';
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
        <label for={r.inputLabel}> {r.inputLabel} </label>
        <input
          type={r.inputType}
          placeholder={r.inputValue}
          id={r.inputLabel}
        />
      </div>
    ));
    const formName = this.state.formName;
    return (
      <div className="formG">
        <form className="form-maker" onSubmit={this.handleSubmit}>
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
