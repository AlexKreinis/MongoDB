import React, { Component } from 'react';
class submitPage extends Component {
  state = {
    arr: [],
    inputData: {
      formID: '',
      inputArr: [],
      labelArr: []
    }
  };
  componentWillMount() {
    fetch('/api/items')
      .then(data => data.json())
      .then(inputs =>
        this.setState(state => ({ arr: [state.arr, ...inputs] }))
      );
    const { inputData } = this.state;
    inputData.formID = this.props.match.params.id;
    this.setState({ inputData });
  }
  handleChangeInp = e => {
    var temp = e.target.name.split('-');
    const index = Number(temp[1]);
    const name = temp[0];
    const { inputData } = this.state;
    inputData.inputArr[index] = e.target.value;
    inputData.labelArr[index] = name;
    this.setState({ inputData });
  };

  sendingData = () => {
    var inputData = this.state.inputData;

    fetch('/api/datas', {
      method: 'POST',
      body: JSON.stringify({ inputData }),
      headers: {
        'content-type': 'application/json'
      }
    });
    this.props.history.push('/');
  };

  render() {
    if (this.state.arr.length) {
      const id = this.props.match.params.id;
      const form = this.state.arr.find(a => a._id === id);

      var inner;
      var name;
      if (form) {
        name = form.formName;
        inner = form.inputs.map((input, index) => {
          return (
            <li key={index}>
              <label>{input.inputLabel}</label>
              <input
                name={`${input.inputLabel}-${index}`}
                placeholder={input.inputValue}
                type={input.inputType}
                onChange={this.handleChangeInp}
              />
            </li>
          );
        });
      }
    }

    return (
      <div className="app">
        <form className="form-display" onSubmit={this.sendingData}>
          <h1>{name}</h1>
          <br />
          {inner}
          <button>Submit the form</button>
        </form>
      </div>
    );
  }
}

export default submitPage;
