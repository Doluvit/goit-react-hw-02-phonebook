import PropTypes from 'prop-types';

export const ContactItem = (id, name, number, deleteContact) => {
  return (
    <li key={id}>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
