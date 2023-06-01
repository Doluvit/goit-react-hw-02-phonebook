import { ContactItem } from 'components/contactItem/contactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem id={id} name={name} number={number} deleteContact={deleteContact} />
        ))}
      </ul>
    </>
  );
};
