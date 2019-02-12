import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteclick = () => {
    this.props.DeleteClickHandler();
  };
  render() {
    const { name, email, phone, address } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() => {
              this.setState({ showContactInfo: !this.state.showContactInfo });
            }}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            onClick={this.onDeleteclick}
            className="fas fa-times"
            style={{ cursor: 'pointer', color: 'red', float: 'right' }}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">
              Address: {address.street} {address.suite} {address.city}
            </li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  DeleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
