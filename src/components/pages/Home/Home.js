import React from 'react';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
        <div className="Home text-white">
            <h1 className="display-1 m-3">Welcome to React Hoarder!</h1>
            <h2 className="display-4 m-3">This is an exciting exploration into the world of React routing and Firebase CRUD</h2>
            <h2 className="m-3">Come on in!</h2>
        </div>
    );
  }
}

export default Home;
