import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import stuffShape from '../../../helpers/propz/stuffShape';

import './StuffCard.scss';

class StuffCard extends React.Component {
  static propTypes = {
    stuff: stuffShape.stuffShape,
    isSingleView: PropTypes.bool.isRequired,
  };

  render() {
    const { stuff, isSingleView } = this.props;
    const editLink = `/edit/${stuff.id}`;
    const singleLink = `/stuff/${stuff.id}`;
    return (
        <div className={`StuffCard ${isSingleView ? 'col-9 mx-auto' : 'col-3'}`}>
            <div className="card">
                {isSingleView ? <img className="card-img-top" src={stuff.itemImage} alt={stuff.itemName} /> : ''}
                <div className="card-body">
                    {isSingleView ? '' : <h5 className="card-title">{stuff.itemName}</h5>}
                    <p className="card-text">{stuff.itemDescription}</p>
                </div>
                {
                    isSingleView
                      ? ''
                      : (
                        <div className="card-footer">
                        <Link className="mx-2 btn btn-warning" to={editLink}>Edit</Link>
                        <Link className="mx-2 btn btn-info" to={singleLink}>Single</Link>
                    </div>
                      )
                }
            </div>
        </div>
    );
  }
}
export default StuffCard;
