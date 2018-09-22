import React, { Component } from 'react';
class submitPage extends Component {
  state = {
    arr: [
      {
        id: 1,
        name: 'firstForm',
        input: [
          {
            inputLabel: 'wowLabel',
            inputType: 'wowType',
            inputValue: 'wowValue'
          },
          {
            inputLabel: 'wowLabel2',
            inputType: 'wowType2',
            inputValue: 'wowValue2'
          }
        ]
      },
      {
        id: 2,
        name: 'secondForm',
        input: [
          {
            inputLabel: 'wowLabel',
            inputType: 'wowType',
            inputValue: 'wowValue'
          },
          {
            inputLabel: 'wowLabel2',
            inputType: 'wowType2',
            inputValue: 'wowValue2'
          }
        ]
      }
    ],
    inputData: ['']
  };

  handleChangeInp = e => {
    const index = e.target.key;
    console.log(e.target.key);
    const inputData = this.state.inputData.map((ing, i) => {
      i === index ? e.target.value : ing;
    });

    this.setState({ inputData });
  };
  render() {
    const { id } = this.props.match.params;
    const arr = this.state.arr.find(a => a.id == id);
    const test = this.state.inputData.map(r => <h1>{r}</h1>);

    var inner;
    var name;
    if (arr) {
      name = arr.name;
      inner = arr.input.map((inputs, index) => (
        <li key={index}>
          <label>{inputs.inputLabel}</label>
          <input
            // value={inputs.inputValue}
            type={inputs.inputType}
            onChange={this.handleChangeInp}
          />
        </li>
      ));
    }
    return (
      <div className="app">
        <form />
        <h1>{name}</h1>
        <br />

        {inner}

        <h2>Testing</h2>
        {test}
      </div>
    );
  }
}

export default submitPage;
