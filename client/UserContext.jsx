import React, { createContext, useContext, useState, useEffect, useMemo, useId } from 'react';
import { Children } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    // states
    const [considering, setConsidering] = useState([]);
    const [applications, setApp] = useState([]);
    const [callbacks, setCallback] = useState([]);
    const [interviews, setInterviews] = useState([]);
    const [offers, setOffers] = useState([]);

    const providerObj = {con: considering, app: applications, cb: callbacks, iv: interviews, of: offers };

    const fetchConsidering = async () => {
        await fetch('api/considering')
        .then((response) => {
            if (response.ok) return response.json();
            throw response;
        })
        .then((data) => {
            setConsidering(data);
        })
        .catch((error) => console.log('An error in UserContext.jsx: Line 17', error))
    }

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

    const fetchInterviews = async () => {
        axios.get('api/interviews')
            .then(function (response) {
                console.log('response', response.data)
                setInterviews(response.data)
            })
            .catch(function (error){
                console.log(error)
            })
    }

    const fetchOffers = async () => {
        axios.get('api/offers')
            .then(function (response) {
                console.log('response', response.data)
                setOffers(response.data)
            })
            .catch(function (error){
                console.log(error)
            })
    }

    useEffect(() => {
        fetchOffers();
        fetchInterviews();
        fetchConsidering();
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