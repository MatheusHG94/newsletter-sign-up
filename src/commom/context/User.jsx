import React, { useState, createContext } from 'react'

export const UserContext = createContext();
UserContext.displayName = 'User';

export function UserProvider({ children }) {

    const [email, setEmail] = useState('');

    return (
        <UserContext.Provider value={{ email, setEmail }}>
            {children}
        </UserContext.Provider>
    )
}
