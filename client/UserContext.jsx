import React, { createContext, useContext, useState, useEffect, useMemo, useId } from 'react';
import { Children } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    // states
    const [applications, setApp] = useState([])
    const [callbacks, setCallback] = useState([]);
    const providerObj = {app: applications, cb: callbacks};

    const fetchApplied = async () => {
        await fetch('api/applied')
        .then((response) => {
            if (response.ok) return response.json();
            throw response;
        })
        .then((data) => {
            setApp(data);
        })
        .catch((error) => console.log('An error in UserContext.jsx: Line 17', error))

    }

    const fetchCallbacks = async () => {
        axios.get('api/callback')
            .then(function (response) {
                console.log('response', response.data)
                setCallback(response.data)
            })
            .catch(function (error){
                console.log(error)
            })
    }

    useEffect(() => {
        // Listings
        fetchCallbacks();

        // Applied
        fetchApplied();

    }, [])

    
    return (
        <UserContext.Provider value={providerObj}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContextProvider, UserContext };



// // fetching data for Applied column from backend


// Axios Get Request
// axios.get('/api/applied')
//   .then(function (response) {
//     console.log('response', response.data)
//     setApp(response.data)
//   })
//   .catch(function (error){
//     console.log(error)
//   })