import React from 'react';

import { Link } from 'react-router-dom';

import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    const editLink = '/edit/12345/';
    const singleLink = '/stuff/12345';
    return (
        <div className="MyStuff">
            <h1>My Stuff</h1>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <Link className="m-3 btn btn-warning" to={editLink}>Edit</Link>
              <Link className="m-3 btn btn-info" to={singleLink}>Single</Link>
            </div>
        </div>
    );
  }
}

export default MyStuff;
