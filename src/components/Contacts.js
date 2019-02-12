import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    const newContact = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContact
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            DeleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
