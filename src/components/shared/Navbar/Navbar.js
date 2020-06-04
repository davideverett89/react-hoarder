import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Navbar.scss';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home">React Hoarder</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {
                    authed
                      ? (
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/home'>Home</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/mystuff'>My Stuff</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/new'>New</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <button className="btn btn-info" onClick={this.logMeOut}>Logout</button>
                                </li>
                            </ul>
                        </div>
                      )
                      : ''
                }
            </nav>
        </div>
    );
  }
}

export default Navbar;
