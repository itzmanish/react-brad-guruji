import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
// Import context api state manager
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
