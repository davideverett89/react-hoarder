import React from 'react';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

import './EditStuff.scss';

class EditStuff extends React.Component {
  state = {
    itemName: '',
    itemDescription: '',
    itemImage: '',
  }

  componentDidMount() {
    const { stuffId } = this.props.match.params;
    stuffData.getSingleStuff(stuffId)
      .then((response) => {
        const stuff = response.data;
        this.setState({
          itemName: stuff.itemName,
          itemDescription: stuff.itemDescription,
          itemImage: stuff.itemImage,
        });
      })
      .catch((err) => console.error('There was a problem with getting a single item:', err));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  updateStuff = (e) => {
    const { stuffId } = this.props.match.params;
    e.preventDefault();
    const {
      itemName,
      itemDescription,
      itemImage,
    } = this.state;
    const newStuff = {
      itemName,
      itemDescription,
      itemImage,
      uid: authData.getUid(),
    };
    stuffData.putStuff(stuffId, newStuff)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('There was a problem with updating stuff:', err));
  }


  render() {
    const {
      itemName,
      itemDescription,
      itemImage,
    } = this.state;

    return (
        <div className="EditStuff">
            <h1>Edit</h1>
            <form className="col-9 m-auto">
            <div className="form-group">
              <label htmlFor="item-name">Item Name</label>
              <input type="text" className="form-control" id="item-name" value={itemName} onChange={this.nameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="item-description">Item Description</label>
              <input type="text" className="form-control" id="item-description" value={itemDescription} onChange={this.descriptionChange} />
            </div>
            <div className="form-group">
              <label htmlFor="item-image">Item Image</label>
              <input type="text" className="form-control" id="item-image" value={itemImage} onChange={this.imageChange} />
            </div>
            <button className="btn btn-primary" onClick={this.updateStuff}>Update Item</button>
          </form>
        </div>
    );
  }
}

export default EditStuff;
