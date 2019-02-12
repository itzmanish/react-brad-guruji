import React, { Component } from 'react';

const Context = React.createContext();

// add a reducer
const reducer = (state, action) => {
  switch (action.TYPE) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.PAYLOAD
        )
      };
    default:
      return {
        state
      };
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    isLoading: false,
    // Dispatch added for doing action on state from any components
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(contacts => this.setState({ contacts, isLoading: false }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
