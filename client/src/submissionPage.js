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
  componentWillMount() {
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

  render() {
    // const { inputDataArr } = this.state;
    // const labels = inputDataArr[0].labelArr.map((r, index) => {
    //   return (
    //     <tr key={index}>
    //       <th>{index}</th>
    //       <th>{r[index]}</th>
    //     </tr>
    //   );
    // });
    // const labels = inputDataArr.labelArr.map((r, index) => {
    //   return (
    //     <tr key={index}>
    //       <th>{index}</th>
    //       <th>{r}</th>
    //     </tr>
    //   );
    // });

    // console.log(this.state.inputDataArr[0]);
    console.log(this.state.inputData2[0].labelArr);

    return <div className="app">{<table>a</table>}</div>;
  }
}

export default submissionPage;
