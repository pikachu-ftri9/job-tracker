import React, { useState } from 'react';
import { Modal, Button, Group, TextInput } from '@mantine/core'
import axios from 'axios';

export default function AddCard() {
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [url, setURL] = useState('')
  return (
    <div style={{alignItems: "flex-start",
    marginLeft: "15px"}}>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Job Information"
      >
        {/* Modal content */}
        <TextInput
          value={title} onChange={(event) => setTitle(event.currentTarget.value)}
          size="lg" fullWidth mt="md" radius="md"
          align="center"
          required
          label="Job Title"

        />
        <TextInput
          value={company} onChange={(event) => setCompany(event.currentTarget.value)}
          size="lg" fullWidth mt="md" radius="md"
          required
          label="Company Name"
        />
        <TextInput
          value={url} onChange={(event) => setURL(event.currentTarget.value)}
          size="lg" fullWidth mt="md" radius="md"
          required
          label="Listing URL"
        />
        <Group>
          <Button
          size="lg" color="blue" fullWidth mt="md" radius="md"
          onClick={() => {
            const newJob = {title, company, url}
            console.log(newJob)
            // axios.post('/api/addNewJob', newJob)
            setOpened(false)
          }}
          >
            Submit
          </Button>
        </Group>
      </Modal>

      <Group position="center">
        <Button 
          styles={() => ({
            root: {
              margin: "0, 20"
          }})}
          size="lg" variant="outline" fullWidth mt="md" radius="md"
          onClick={() => setOpened(true)}
        >
          Add Job
        </Button>
      </Group>
    </div>
    /*<div>
      <Group position="left">
        <Button
          styles={() => ({
            root: {
              margin: "0, 20"
          }})}
          size="lg"
          id="addJobButton"
          variant="light"
          onClick={() => {
            alert("Adding a new card")
          }}
        >
          Add Job
        </Button>
      </Group> 
      </div> */
  )
}
