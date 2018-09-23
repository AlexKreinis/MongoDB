import React, { Component } from 'react';
class submitPage extends Component {
  state = {
    arr: [],
    inputData: {
      formID: '112abcs',
      inputArr: ['aaa', 'bbb']
    }
  };
  componentWillMount() {
    fetch('/api/items')
      .then(data => data.json())
      .then(inputs =>
        this.setState(state => ({ arr: [state.arr, ...inputs] }))
      );
  }
  handleChangeInp = e => {
    const index = Number(e.target.name);
    const { inputData } = this.state;
    inputData.inputArr[index] = e.target.value;
    this.setState({ inputData });
  };

  sendingData = () => {
    // var inputArr = this.state.inputData.inputArr;
    // var formID = this.props.match.params.id;
    var inputData = this.state.inputData;
    console.log(inputData);
    fetch('/api/datas', {
      method: 'POST',
      body: JSON.stringify({ inputData: inputData }),
      headers: {
        'different-content': 'application'
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
                name={index}
                //value={input.inputValue}
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
