import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const JobCard = ({title = 'Full Stack Engineer', company = 'Codesmith', url = 'none'}) => {

  return (
    <div style={{ textAlign: "center", border: "1px solid black" }}>
      <h3>{title}</h3>
      <Badge color="pink" variant="light">
        <h4>{company}</h4>
      </Badge>
      <Card shadow="sm" p="lg" radius="md" >
      {/* withBorder */}

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}></Text>
      </Group>

      <Text size="sm" color="dimmed">
        Listing URL: {url}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Button
      </Button>
    </Card>
    </div>
  );
}

export default JobCard