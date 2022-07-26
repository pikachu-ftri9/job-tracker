import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Children } from 'react';
const UserContext = createContext();
// const UserContextUpdater = createContext();

// const useUserContextState = () => {
//     const context = useContext(UserContextState);

//     // if context is undefined, throw an error
//     if (context === 'undefined') throw new Error('useUserContextState was used outside of its provider');

//     return context;
// }

const UserContextProvider = ({ children }) => {
    // states
    const [applied, setApplied] = useState([]);
    const [callback, setCallback] = useState([]);

    // fetching data for Applied column from backend
    const fetchApplied = () => {
        fetch('/api/Applied')
            .then((response) => response.json())
            .then((data) => {
                console.log("data: ", data);
                setApplied(data.rows)
            })
            .catch((error) => console.log('An error in UserContext.jsx: Line 17', error));
    }

    useEffect(() => {
        fetchApplied();
    }, [])

    return (
        <UserContext.Provider value={applied}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContextProvider, UserContext };