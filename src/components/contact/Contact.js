import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import consumer from context api for performing operation on store data
import { Consumer } from '../../context';
class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteclick = (id, dispatch) => {
    dispatch({ TYPE: 'DELETE_CONTACT', PAYLOAD: id });
  };
  render() {
    const { id, name, email, phone, address } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  onClick={this.onDeleteclick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  DeleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
