export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  console.log(filter);
  const normalizedFilter = filter.toLocaleLowerCase();

  console.log(contacts);
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
};
