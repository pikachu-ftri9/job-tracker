import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
// import { useNavigate } from "react-router-dom";
// {title = 'Full Stack Engineer', company = 'Codesmith', url = 'www.google.com'}
const JobCard = ({title, company, url}) => {

  function visitListing(url) {
    window.location.href = url;
    // return null;
  }

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
      
    </Card>
    </div>
  );
}

export default JobCard;