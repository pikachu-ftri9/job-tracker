import React, { createContext, useContext, useState, useEffect, useMemo, useId } from 'react';
import { Children } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    // states
    const [applications, setApp] = useState([])
    const [lists, setListings] = useState([]);
    const providerObj = {app: applications, listings: lists};

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

    const fetchListings = async () => {
        axios.get('api/callback')
            .then(function (response) {
                console.log('response', response.data)
                setListings(response.data)
            })
            .catch(function (error){
                console.log(error)
            })
        // await fetch('/api/listings')
        // .then((response) => {
        //     if (response.ok) return response.json();
        //     throw response;
        // })
        // .then((data) => {
        //     setListings(data);
        // })
        // .catch((error) => console.log('An error in UserContext.jsx: ', error))

    }

    useEffect(() => {
        // Listings
        fetchListings();

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