import React from 'react'
import ColumnContainer from './ColumnContainer.jsx';
import AddCard from '../components/AddCard.jsx';
import DeleteCard from '../components/DeleteCard.jsx'

const MainContainer = () => {
  return (
    <>
      <h1>Job Tracker</h1>
      <div style={{margin: "0 auto", width: "300px"}}>
        <AddCard />
      </div>  
    <ColumnContainer />
    </>
  );
}

export default MainContainer