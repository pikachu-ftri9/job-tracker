import React from 'react'
import { Card, Image, Text, Badge, Button, Group, Select } from '@mantine/core';
// import { useNavigate } from "react-router-dom";
// {title = 'Full Stack Engineer', company = 'Codesmith', url = 'www.google.com'}
import DeleteCard from './DeleteCard.jsx'
import DropDown from './DropDown.jsx';

const JobCard = ({id, title, company, url}) => {

  // function visitListing(url) {
  //   window.location.href = url;
  //   // return null;
  // }

  return (
    <div>
      {/* <Badge color="pink" variant="light">
        <h4>{company}</h4>
      </Badge> */}
      <Card className="card" shadow="sm" p="lg" radius="md" >
      {/* withBorder */}
      <h2>{title}</h2>
      <h3>{company}</h3>
      
      
      {/* 
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}></Text>
      </Group> */}

      {/* <Text size="sm" color="dimmed">
        Listing URL: {url}
      </Text> */}

      <Button size="lg" color="blue" variant="outline" fullWidth mt="md" radius="md">
        
      <a style={{textDecoration: "none", color:"inherit"}} href={url} target="_blank" rel="noreferrer">See Listing</a>
        
      </Button>
      <div style={{display: "flex", alignItems: "flex-end"}}>
        <DropDown/>
        <DeleteCard id={id}/>
      </div>
      
    </Card>
    </div>
  );
}

export default JobCard;