import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
// import { useNavigate } from "react-router-dom";

/** when app loads a request will be made for all the user's jobs
 *  each card will render with the job title, company name, and job listing url
 */



const JobCard = () => {

  return (
    <div >
      <Card shadow="sm" p="lg" radius="md" withBorder className="card">
      <Group position="center" mt="md" mb="xs">
        <Text weight={400}>Full Stack Engineer</Text >
        <Text weight={400}>Amazon</Text>
      </Group>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        See Listing
      </Button>
    </Card>

    </div>
  );
}

export default JobCard