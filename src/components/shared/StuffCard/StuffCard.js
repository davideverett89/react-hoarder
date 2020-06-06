import React from 'react';

import './StuffCard.scss';

class StuffCard extends React.Component {
  render() {
    const { stuff } = this.props;
    return (
        <div className="StuffCard col-3">
            <div className="card">
                <img className="card-img-top" src={stuff.itemImage} alt={stuff.itemName} />
                <div className="card-body">
                    <h5 className="card-title">{stuff.itemName}</h5>
                    <p className="card-text">{stuff.itemDescription}</p>
                </div>
            </div>
        </div>
    );
  }
}
export default StuffCard;
