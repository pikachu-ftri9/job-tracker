import React from 'react'
import Column from '../components/Column.jsx'
import { UserContextProvider } from '../UserContext.jsx';
const ColumnContainer = () => {
  return (
    <div style={{
        width: "90%",
        margin: '0 auto'
      }}>
      <UserContextProvider>
        <Column />
      </UserContextProvider>
    </div>
  );
}

export default ColumnContainer;