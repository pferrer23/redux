import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul className="">
        <li className="link"><Link to="/">Home</Link></li>
      </ul>
    : null
};


const ActionLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul className="">
        <li className="link">New Duck</li>
        <li className="link"><Link to="/logout">Logout</Link></li>
      </ul>
    : <ul className="">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/auth">Login</Link></li>
      </ul>
};

const Navigation = ({isAuthed}) => {
  return (
    <div className="container">
      <nav className="navContainer">
        <NavLinks isAuthed={isAuthed}/>      
        <ActionLinks isAuthed={isAuthed}/>      
      </nav>
    </div>
  );
};
Navigation.propTypes = NavLinks.propTypes = ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
};

export default Navigation;
