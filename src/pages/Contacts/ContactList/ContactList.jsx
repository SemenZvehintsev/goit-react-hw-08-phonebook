import { ContactItem } from "pages/Contacts/ContactItem/ContactItem";
import { useSelector } from "react-redux/es/exports";
import styles from 'pages/Contacts/ContactList/ContactList.module.css'
import { selectContacts, selectError, selectFilter, selectIsLoading } from "redux/selectors";

export const ContactList = () => {
    let contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading)

    if (filter) {
        contacts = contacts.filter(({contactName}) => 
        {return contactName.toLowerCase().indexOf(filter.toLowerCase()) > -1})
    }

    if (error) {alert(error)}
    
    return  <ul className={styles.contactList}>{isLoading && <p>Loading...</p>}{contacts && contacts.map(({id, contactName, contactNumber}) => 
    <ContactItem key={id} id={id} contactName={contactName} contactNumber={contactNumber}/>)}
    </ul>
}
