import React from 'react';

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

  removeStuff = (stuffId) => {
    stuffData.removeStuff(stuffId)
      .then(() => this.getStuff())
      .catch((err) => console.error('There was a problem with deleting stuff:', err));
  }

  render() {
    const { stuff } = this.state;
    const buildStuffCard = stuff.map((singleStuff) => (
      <StuffCard key={singleStuff.id} stuff={singleStuff} isSingleView={false} removeStuff={this.removeStuff} />
    ));
    return (
        <div className="MyStuff">
            <h1>My Stuff</h1>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {buildStuffCard}
            </div>
        </div>
    );
  }
}

export default MyStuff;
