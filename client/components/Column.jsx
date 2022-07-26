import React, { useState } from 'react'
import JobCard from './JobCard.jsx';

const Column = () => {
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
        <div>Applied</div>
        <div>Phone Screen</div>
        <div>Have Interview</div>
        <div>Offers</div>
      </div>
    </>
  );
}

export default Column