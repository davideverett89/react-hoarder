import React from 'react';

import './StuffCard.scss';

class StuffCard extends React.Component {
  render() {
    const { stuff } = this.props;
    return (
        <div className="StuffCard">
            <h1>{stuff.itemName}</h1>
        </div>
    );
  }
}
export default StuffCard;
