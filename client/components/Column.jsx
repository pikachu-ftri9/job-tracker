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
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          textAlign: "center"
        }}
      >
        <div>
          Considering
          <JobCard />
        </div>
        <div>Applied
          <div>{app.map(el => {
            return (
              <div>
                <JobCard title={el.title} company={el.company} url={el.url}/>
              </div>
            )
          })}</div>
        </div>
        <div>Phone Screen</div>
        <div>Have Interview</div>
        <div>Offers</div>
      </div>
    </>
  );
}

export default Column