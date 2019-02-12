import React from 'react';
// added proptypes for validation on props
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {props.branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
// default props
Header.defaultProps = {
  branding: 'My App'
};
// validating props
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
