import React, { useContext } from 'react'
import JobCard from './JobCard.jsx';
import { UserContext, UserContextProvider } from '../UserContext.jsx';

const Column = () => {
  const providerObj = useContext(UserContext);
  console.log("app", providerObj);

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
        </div>
        <div>
          <h2 className="card">Applied</h2>
          <div>{providerObj.app.map(el => {
            return (
              <div>
                <JobCard title={el.title} company={el.company} url={el.url} key={el._id}/>
              </div>
            )
          })}</div>
        </div>
        <div>
          <h2 className="card">Callbacks</h2>
          <div>{providerObj.cb.map((el, ind) => {
            return (
              <div>
                <JobCard title={el.title} company={el.company} url={el.url} key={ind + 2}/>
              </div>
            )
          })}</div>
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