import React, { useContext } from 'react'
import JobCard from './JobCard.jsx';
import { UserContext, UserContextProvider } from '../UserContext.jsx';
// const providerObj = {con: considering, app: applications, cb: callbacks, iv: interviews, of: offers };

const Column = () => {
  const providerObj = useContext(UserContext);

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
          <div>{providerObj.con.map((el, ind) => {
            return (
              <div>
                <JobCard id={el._id} title={el.title} company={el.company} url={el.url} key={ind}/>
              </div>
            )})}
          </div>
        </div>
        <div>
          <h2 className="card">Applied</h2>
          <div>{providerObj.app.map((el, ind) => {
            // console.log(app, el);
            return (
              <div>
                <JobCard id={el._id} title={el.title} company={el.company} url={el.url} key={ind}/>
              </div>
            )
          })}</div>
        </div>
        <div>
          <h2 className="card">Callbacks</h2>
          <div>{providerObj.cb.map((el, ind) => {
            return (
              <div>
                <JobCard id={el._id} title={el.title} company={el.company} url={el.url} key={ind}/>
              </div>
            )
          })}</div>
        </div>
        <div>
          <h2 className="card">Interviews</h2>
          <div>{providerObj.iv.map((el, ind) => {
            return (
              <div>
                <JobCard id={el._id} title={el.title} company={el.company} url={el.url} key={ind}/>
              </div>
            )
          })}</div>
        </div>
        <div>
          <h2 className="card">Offers</h2>
          <div>{providerObj.of.map((el, ind) => {
            return (
              <div>
                <JobCard id={el._id} title={el.title} company={el.company} url={el.url} key={ind}/>
              </div>
            )
          })}</div>
        </div>
      </div>
    </>
  );
}

export default Column