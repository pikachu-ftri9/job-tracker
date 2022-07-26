import React, { useState } from 'react'
import JobCard from './JobCard.jsx';

const Column = () => {
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
        <div>
          <h2 className="card">Applied</h2>
          <JobCard />
        </div>
        <div>
          <h2 className="card">Phone Screens</h2>
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