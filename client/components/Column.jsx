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
          // flexDirection: "row",
          // justifyContent: "space-around",
          textAlign: "center",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridColumnGap: "15px"

        }}
      >
        <div>
          <h2 className="card">Considering</h2>
          <JobCard />
        </div>
        <div>Applied
          <div>{providerObj.app.map(el => {
            return (
              <div>
                <JobCard title={el.title} company={el.company} url={el.url} key={el._id}/>
              </div>
            )
          })}</div>
        </div>
        <div>Phone Screen
          <div>{providerObj.cb.map((el, ind) => {
            return (
              <div>
                <JobCard title={el.title} company={el.company} url={el.url} key={ind + 2}/>
              </div>
            )
          })}</div>
        </div>
        <div>Have Interview</div>
        <div>Offers</div>
      </div>
    </>
  );
}

export default Column