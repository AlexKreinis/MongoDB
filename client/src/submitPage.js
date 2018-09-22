import React, { Component } from 'react';
class submitPage extends Component {
  state = {
    arr: [
      {
        id: 0,
        name: 'firstForm',
        input: [
          {
            inputLabel: 'wowLabel',
            inputType: 'text',
            inputValue: 'wowValue'
          },
          {
            inputLabel: 'wowLabel2',
            inputType: 'text',
            inputValue: 'wowValue2'
          }
        ]
      },
      {
        id: 1,
        name: 'secondForm',
        input: [
          {
            inputLabel: 'wowLabel',
            inputType: 'text',
            inputValue: 'wowValue'
          },
          {
            inputLabel: 'wowLabel2',
            inputType: 'text',
            inputValue: 'wowValue2'
          }
        ]
      }
    ],
    inputData: {
      id: '',
      inputArr: ['']
    }
  };
  // componentWillMount() {
  //   fetch('/api/items')
  //     .then(data => data.json())
  //     .then(inputs =>
  //       this.setState(state => ({ arr: [state.arr, ...inputs] }))
  //     );
  // }
  handleChangeInp = e => {
    const index = Number(e.target.name);
    const { inputData } = this.state;
    inputData.inputArr[index] = e.target.value;
    this.setState({ inputData });
  };
  render() {
    const { id } = this.props.match.params;
    const arr = this.state.arr.find(a => a.id === Number(id));

    var inner;
    var name;
    if (arr) {
      name = arr.name;
      inner = arr.input.map((inputs, index) => {
        return (
          <li key={index}>
            <label>{inputs.inputLabel}</label>
            <input
              name={index}
              //value={inputs.inputValue}
              type={inputs.inputType}
              onChange={this.handleChangeInp}
            />
          </li>
        );
      });
    }
    const test = this.state.inputData.inputArr.map(r => {
      <p>{r}</p>;
    });
    return (
      <div className="app">
        <form>
          <h1>{name}</h1>
          <br />
          {inner}
        </form>
        {test}
      </div>
    );
  }
}

export default submitPage;
