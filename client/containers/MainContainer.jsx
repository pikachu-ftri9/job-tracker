import React from 'react'
import ColumnContainer from './ColumnContainer.jsx';
import AddCard from '../components/AddCard.jsx';

const MainContainer = () => {
  return (
    <div style={{display: "flex", marginRight: "124px"}}>
      <AddCard />
      <ColumnContainer />
    </div>
  );
}

export default MainContainer