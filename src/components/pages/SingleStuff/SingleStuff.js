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
        const singleStuff = response.data;
        singleStuff.id = stuffId;
        this.setState({ singleStuff });
      })
      .catch((err) => console.error('There was a problem with getting a single item:', err));
  }

  removeStuff = (stuffId) => {
    stuffData.removeStuff(stuffId)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('There was a problem with deleting stuff:', err));
  }

  render() {
    const { singleStuff } = this.state;
    const { stuffId } = this.props.match.params;
    const buildSingleView = () => {
      if (singleStuff.id) {
        return <StuffCard key={stuffId} stuff={singleStuff} isSingleView={true} removeStuff={this.removeStuff} />;
      }
      return '';
    };

    return (
        <div className="SingleStuff container-fluid">
          <div className="row">
            <h1 className="mt-3 col-12">{singleStuff.itemName}</h1>
              {buildSingleView()}
          </div>
        </div>
    );
  }
}

export default SingleStuff;
