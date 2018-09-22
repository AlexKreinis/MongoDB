import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './table.css';

class table extends Component {
  state = {
    arr: [],
    numofSub: 0
  };
  componentWillMount() {
    fetch('/api/items')
      .then(data => data.json())
      .then(inputs =>
        this.setState(state => ({ arr: [state.arr, ...inputs] }))
      );
  }
  render() {
    const data = this.state.arr.map((r, index) => (
      <tr key={index}>
        <th>{index}</th>
        <th>{r.formName}</th>
        <th>{this.state.numofSub} </th>
        <th>
          <Link to={`/submitPage/${index}`}>Submit PageLink</Link>
        </th>
        <th>
          <Link to={`/submissionPage/${index}`}>Submission page Link </Link>
        </th>
      </tr>
    ));

    return (
      <div className="appTable">
        <Link to="/form">Create a new form</Link>
        <br /> <br />
        <table>
          <tbody>
            <tr>
              <th>Form ID</th>
              <th>Form Name</th>
              <th>#Submissions</th>
              <th>Submit Page</th>
              <th>Submission page</th>
            </tr>
            {data}
          </tbody>
        </table>
      </div>
    );
  }
}

export default table;
