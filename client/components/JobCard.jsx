import React from 'react'
import { Card, Button} from '@mantine/core';

import DeleteCard from './DeleteCard.jsx'
import DropDown from './DropDown.jsx';

const JobCard = ({id, title, company, url}) => {

  return (
    <div>
      
      <Card className="card" shadow="sm" p="lg" radius="md" >
        <h2>{title}</h2>
        <h3>{company}</h3>
        <Button size="lg" color="blue" variant="outline" fullWidth mt="md" radius="md">
          
          <a 
            style={{textDecoration: "none", color:"inherit"}} 
            href={url} 
            target="_blank" 
            rel="noreferrer"
          >
            See Listing
          </a>
          
        </Button>
        <div 
          style={{
            display: "flex", 
            justifyContent: "space-evenly", 
            alignItems: "flex-end"
          }}>
          <DropDown id={id}/>
          <DeleteCard id={id}/>
        </div>
      </Card>
    </div>
  );
}

export default JobCard;