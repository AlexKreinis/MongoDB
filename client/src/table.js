import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './table.css';

class table extends Component {
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
    numofSub: 1
  };

  render() {
    const data = this.state.arr.map(r => (
      <tr>
        <th>{r.id}</th>
        <th>{r.name}</th>
        <th>{this.state.numofSub} </th>
        <th>
          <Link to={`/submitPage/${r.id}`}>Submit PageLink</Link>
        </th>
        <th>
          <Link to={`/submissionPage/${r.id}`}>Submission page Link </Link>
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
