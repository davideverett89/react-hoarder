import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import stuffShape from '../../../helpers/propz/stuffShape';

import './StuffCard.scss';

class StuffCard extends React.Component {
  static propTypes = {
    stuff: stuffShape.stuffShape,
    isSingleView: PropTypes.bool.isRequired,
    removeStuff: PropTypes.func.isRequired,
  };

  deleteEvent = (e) => {
    const { removeStuff, stuff } = this.props;
    e.preventDefault();
    removeStuff(stuff.id);
  }

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
                    {isSingleView ? <p className="card-text">{stuff.itemDescription}</p> : ''}
                </div>
                <div className="card-footer">
                {
                    isSingleView
                      ? ''
                      : (
                      <React.Fragment>
                        <Link className="mx-2 btn btn-warning" to={editLink}>Edit</Link>
                        <Link className="mx-2 btn btn-info" to={singleLink}>View</Link>
                      </React.Fragment>
                      )
                }
                   <button className="mx-2 btn btn-danger" onClick={this.deleteEvent}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    );
  }
}
export default StuffCard;
