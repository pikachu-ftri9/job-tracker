import React, { createContext, useContext, useState, useEffect, useMemo, useId } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    // states
    const [considering, setConsidering] = useState([]);
    const [applied, setApplied] = useState([]);
    const [callbacks, setCallbacks] = useState([]);
    const [interviews, setInterviews] = useState([]);
    const [offers, setOffers] = useState([]);

    const providerObj = {considering: considering, applied: applied, callbacks: callbacks, interviews: interviews, offers: offers};

    const fetchConsidering = async () => {
        await axios.get('api/considering')
            .then((response) => {
                    console.log('response', response.data)
                    setConsidering(response.data)
                })
                .catch(function (error){
                    console.log(error)
            })
    }

    const fetchApplied = async () => {
        await axios.get('api/applied')
            .then((response) => {
                console.log('response', response.data)
                setApplied(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const fetchCallbacks = async () => {
        await axios.get('api/callbacks')
            .then((response) => {
                console.log('response', response.data)
                setCallbacks(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const fetchInterviews = async () => {
        await axios.get('api/interviews')
            .then((response) => {
                console.log('response', response.data)
                setInterviews(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const fetchOffers = async () => {
        await axios.get('api/offers')
            .then((response) => {
                console.log('response', response.data)
                setOffers(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchOffers();
        fetchInterviews();
        fetchConsidering();
        fetchCallbacks();
        fetchApplied();
    }, [])

    
    return (
        <UserContext.Provider value={providerObj}>
            {children}
        </UserContext.Provider>
    )
}
// fetchOffers, fetchInterviews, fetchConsidering, fetchCallbacks, fetchApplied 
export { UserContextProvider, UserContext};