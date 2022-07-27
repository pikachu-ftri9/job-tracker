import React from 'react'
import ColumnContainer from './ColumnContainer.jsx';
import AddCard from './AddCard.jsx';

const MainContainer = () => {
  return (
    <div style={{display: "flex"}}>
      <AddCard/>
      <ColumnContainer />
    </div>
  );
}

export default MainContainer