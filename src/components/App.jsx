import { Component } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = data => {
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === data.name)
        ? alert(`${data.name} is already in contacts`)
        : { contacts: [data, ...contacts] }
    );
  };

  deleteContact = contactId => {
    this.setState(prev => ({
  contacts: prev.contacts.filter(contact => contact.id !== contactId)
}))
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.handleSubmit} />

        <h2>Contacts</h2>
        {/* <Filter/> */}
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
