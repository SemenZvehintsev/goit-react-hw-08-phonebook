import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";
import { contactsReducer } from "./contacts/contacts.slice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        user: authReducer
    }
})
