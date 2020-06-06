import React from 'react';

import './SingleStuff.scss';

import stuffData from '../../../helpers/data/stuffData';

import StuffCard from '../../shared/StuffCard/StuffCard';

class SingleStuff extends React.Component {
  state = {
    singleStuff: {},
  }

  componentDidMount() {
    const { stuffId } = this.props.match.params;
    stuffData.getSingleStuff(stuffId)
      .then((response) => {
        this.setState({ singleStuff: response.data });
      })
      .catch((err) => console.error('There was a problem with getting a single item:', err));
  }

  render() {
    const { singleStuff } = this.state;
    const { stuffId } = this.props.match.params;
    return (
        <div className="SingleStuff">
            <h1 className="mt-3">{singleStuff.itemName}</h1>
            <StuffCard key={stuffId} stuff={singleStuff} isSingleView={true} />
        </div>
    );
  }
}

export default SingleStuff;
