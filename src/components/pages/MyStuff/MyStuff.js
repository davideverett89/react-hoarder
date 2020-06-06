import React from 'react';

import './MyStuff.scss';

class MyStuff extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const stuffId = '12345';
    this.props.history.push(`/stuff/${stuffId}/edit`);
  }

  singleEvent = (e) => {
    e.preventDefault();
    const stuffId = '12345';
    this.props.history.push(`/stuff/${stuffId}`);
  }

  render() {
    return (
        <div className="MyStuff">
            <h1>My Stuff</h1>
            <div className="d-flex flex-row justify-content-center">
              <button className="m-3 btn btn-dark" onClick={this.editEvent}>Edit</button>
              <button className="m-3 btn btn-dark" onClick={this.singleEvent}>Single</button>
            </div>
        </div>
    );
  }
}

export default MyStuff;
