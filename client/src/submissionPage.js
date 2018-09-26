import React, { Component } from 'react';
class submissionPage extends Component {
  state = {
    inputDataArr: [],
    inputData2: [
      {
        formID: 'test',
        inputArr: [1, 2, 3],
        labelArr: [4, 5, 6]
      }
    ]
  };
  componentDidMount() {
    fetch('/api/datas')
      .then(data => data.json())
      .then(datas => {
        const filterdDatas = datas.filter(data => {
          return data.formID == this.props.match.params.id;
        });
        this.setState(currentState => ({
          inputDataArr: [...currentState.inputDataArr, ...filterdDatas]
        }));
      });
  }
  // renderLabels() {
  //   const { inputDataArr } = this.state;
  //   return (
  //     !!inputDataArr.length &&
  //     inputDataArr[0].labelArr.map((label, index) => (
  //       <th key={index}>{label}</th>
  //     ))
  //   );
  // }

  getInputs(data) {
    if (data[0].inputArr && data[0]) {
      return data[0].inputArr.map((value, index) => (
        <tr key={index}>
          <th>{value}</th>
        </tr>
      ));
    }
    return {};
  }

  render() {
    const data = this.state.inputDataArr.map((input, index) => {
      return { input };
    });
    console.log(data);
    const input = this.getInputs(data);
    return <div className="app">{console.log(input)}</div>;
  }
}

export default submissionPage;
