import React from 'react';

import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

import StuffCard from '../../shared/StuffCard/StuffCard';

import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    stuff: [],
  }

  getStuff = () => {
    const uid = authData.getUid();
    stuffData.getStuffByUid(uid)
      .then((stuff) => this.setState({ stuff }))
      .catch((err) => console.error('There was a problem with getting stuff:', err));
  }

  componentDidMount() {
    this.getStuff();
  }

  render() {
    const { stuff } = this.state;
    const editLink = '/edit/12345/';
    const singleLink = '/stuff/12345';
    const buildStuffCard = stuff.map((singleStuff) => (
      <StuffCard key={singleStuff.id} stuff={singleStuff} />
    ));
    return (
        <div className="MyStuff">
            <h1>My Stuff</h1>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <Link className="m-3 btn btn-warning" to={editLink}>Edit</Link>
              <Link className="m-3 btn btn-info" to={singleLink}>Single</Link>
              {buildStuffCard}
            </div>
        </div>
    );
  }
}

export default MyStuff;
