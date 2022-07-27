import React, { useState, useContext, useEffect } from 'react'
import JobCard from './JobCard.jsx';
// import { UserContext, UserContextProvider } from '../UserContext.jsx';
import axios from 'axios';

const Column = () => {
  // const app = useContext(UserContext);
  const [app, setApp] = useState([])

  // const fetchApplied = () => {
  //   console.log('fetchApplied ')
  //   fetch('api/applied')
  //       .then((response) => {
  //           console.log("response", response);
  //           response.json()
  //       })
  //       .then((data) => {
  //           console.log("hello data: ", data);
  //           setApp(data);
  //       })
  //       .catch((error) => console.log('An error in UserContext.jsx: Line 17', error));
  // }

  useEffect(() => {
      console.log('useEffect', app)
      // fetchApplied();
      axios.get('/api/applied')
        .then(function (response) {
          console.log('response', response.data)
          setApp(response.data)
        })
        .catch(function (error){
          console.log(error)
        })
  }, [])

    const listings = app.map((el, i) => {
      return (
        <div>
          <JobCard key={i} title={el.title} company={el.company} url={el.url}/>
        </div>
      )
    })

  return (
    
    <>
      <div
        style={{
          display: "grid",
          textAlign: "center",
          gridTemplateColumns: "repeat(5, 1fr)",
          backgroundColor: "lightblue",
          borderRadius: "10px"

        }}
      >
        <div>
          <h2 className="card">Considering</h2>
          {listings}
        </div>
        <div>
          <h2 className="card">Applied</h2>
          <div>
            {listings}
          </div>
        </div>
        <div>
          <h2 className="card">Callbacks</h2>
          </div>
        <div>
          <h2 className="card">Interviews</h2>
          </div>
        <div>
          <h2 className="card">Offers</h2>
          </div>
      </div>
    </>
  );
}

export default Column