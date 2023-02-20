import { ContactForm } from "pages/Contacts/ContactForm/ContactForm";
import { ContactList } from "pages/Contacts/ContactList/ContactList";
import { Filter } from "pages/Contacts/Filter/Filter";

export const Contacts =()=> {
    return (
        <div>
          <h1>Phonebook</h1>
          <ContactForm/>
          <h2>Contacts</h2>
          <Filter/> 
          <ContactList/>
        </div>
      );
}

