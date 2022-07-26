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
          <h2>Considering</h2>
          <JobCard />
        </div>
        <div>
          <h2>Applied</h2>
          <JobCard />
        </div>
        <div>
          <h2>Phone Screens</h2>
        </div>
        <div>
          <h2>Interviews</h2>
        </div>
        <div>
          <h2>Offers</h2>
        </div>
      </div>
    </>
  );
}

export default Column