import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";

export function Phonebook() {
  return (
    <>
      <div className="phonebook">
        <ContactForm />
        <div className="contacts-wrapper">
          <h2 className="contacts-title">Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
}
