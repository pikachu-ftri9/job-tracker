import React, { useContext } from 'react'
import JobCard from './JobCard.jsx';
import { UserContext, UserContextProvider } from '../UserContext.jsx';

const Column = () => {
  const providerObj = useContext(UserContext);

  return (
    <>
      <div
        style={{
          display: "grid",
          textAlign: "center",
          gridTemplateColumns: "repeat(5, 1fr)",
          backgroundColor: "lightgray",
          borderRadius: "10px"
        }}
      >

        <div>
          <h2 className="columnCard">Considering</h2>
          <div>{providerObj.considering.map((job, ind) => {
            return (
              <div>
                <JobCard id={job._id} title={job.title} company={job.company} url={job.url} key={ind}/>
              </div>
            )})}
          </div>
        </div>
        <div>
          <h2 className="columnCard">Applied</h2>
          <div>{providerObj.applied.map((job, ind) => {
            // console.log(app, job);
            return (
              <div>
                <JobCard id={job._id} title={job.title} company={job.company} url={job.url} key={ind}/>
              </div>
            )
          })}</div>
        </div>
        <div>
          <h2 className="columnCard">Callbacks</h2>
          <div>{providerObj.callbacks.map((job, ind) => {
            return (
              <div>
                <JobCard id={job._id} title={job.title} company={job.company} url={job.url} key={ind}/>
              </div>
            )
          })}</div>
        </div>
        <div>
          <h2 className="columnCard">Interviews</h2>
          <div>{providerObj.interviews.map((job, ind) => {
            return (
              <div>
                <JobCard id={job._id} title={job.title} company={job.company} url={job.url} key={ind}/>
              </div>
            )
          })}</div>
        </div>
        <div>
          <h2 className="columnCard">Offers</h2>
          <div>{providerObj.offers.map((job, ind) => {
            return (
              <div>
                <JobCard id={job._id} title={job.title} company={job.company} url={job.url} key={ind}/>
              </div>
            )
          })}</div>
        </div>
      </div>
    </>
  );
}

export default Column