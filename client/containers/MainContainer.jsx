import React from 'react'
import ColumnContainer from './ColumnContainer.jsx';
import AddCard from '../components/AddCard.jsx';
import DeleteCard from '../components/DeleteCard.jsx'

const MainContainer = () => {
  return (
    // marginRight: "124px"
    <>
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <AddCard />
      <h1>Job Tracker</h1>
      <DeleteCard/>
    </div>
    <ColumnContainer />
    </>
  );
}

export default MainContainer