import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './table.css';

class table extends Component {
  state = {
    arr: [],
    numOfSub: 0
  };
  componentDidMount() {
    fetch('/api/items')
      .then(data => data.json())
      .then(inputs => {
        this.setState(state => ({ arr: [state.arr, ...inputs] }));
        const numOfSub = inputs[0].numOfSubs;
        console.log(numOfSub);
        this.setState({ numOfSub });
      });
  }
  render() {
    const data = this.state.arr.map((r, index) => {
      if (r._id) {
        return (
          <tr key={index}>
            <th>{index}</th>
            <th>{r.formName}</th>
            <th>{this.state.numOfSub} </th>
            <th>
              <Link to={`/submitPage/${r._id}`}>Submit PageLink</Link>
            </th>
            <th>
              <Link to={`/submissionPage/${r._id}`}>Submission page Link </Link>
            </th>
          </tr>
        );
      }
    });

    return (
      <div className="appTable">
        <Link to="/form">Create a new form</Link>
        <br /> <br />
        <tbody>
          <table>
            <tr>
              <th>Form ID</th>
              <th>Form Name</th>
              <th>#Submissions</th>
              <th>Submit Page</th>
              <th>Submission page</th>
            </tr>
            {data}
          </table>
        </tbody>
      </div>
    );
  }
}

export default table;
