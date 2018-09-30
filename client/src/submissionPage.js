import React, { Component } from 'react';
import './submissionPage.css';
class submissionPage extends Component {
  state = {
    inputDataArr: []
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

  getLabels(data) {
    if (data[0] && data[0].input) {
      console.log(data[0].input);
      return data[0].input.labelArr.map((value, index) => (
        <th key={index}>{value}</th>
      ));
    }
    return [];
  }
  getInputs(data) {
    if (data) {
      var table = data.map((val, index) => {
        return (
          <tr className="labelTr" key={index}>
            {val.input.inputArr.map((val2, index2) => {
              return <th key={index2}>{val2}</th>;
            })}
          </tr>
        );
      });
      return table;
    }
    return [];
  }

  render() {
    const data = this.state.inputDataArr.map(input => {
      return { input };
    });
    const labels = this.getLabels(data);
    const input = this.getInputs(data);

    return (
      <div className="resultTable">
        <h1> The submission table </h1>
        <tbody>
          <table>
            <tr>{labels}</tr>
            {input}
          </table>
        </tbody>
      </div>
    );
  }
}

export default submissionPage;
