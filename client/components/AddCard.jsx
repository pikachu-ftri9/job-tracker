import React, { useState } from 'react';
import { Modal, Button, Group, TextInput } from '@mantine/core'
import axios from 'axios';

export default function AddCard() {
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [url, setURL] = useState('')
  return (
    <div>
      <Modal
        opened={opened}
        closeOnClickOutside="true"
        onClose={() => {
          setTitle('');
          setCompany('')
          setURL('')
          setOpened(false)}
        }
        title="Job Information"
      >
        {/* Modal content */}
        
        <TextInput
          data-autofocus
          value={title} onChange={(event) => setTitle(event.currentTarget.value)}
          size="xl" fullWidth mt="md" radius="md"
          align="center"
          required
          
          label="Job Title"

        />
        <TextInput
          value={company} onChange={(event) => setCompany(event.currentTarget.value)}
          size="xl" fullWidth mt="md" radius="md"
          required
          label="Company Name"
        />
        <TextInput
          value={url} onChange={(event) => setURL(event.currentTarget.value)}
          size="xl" fullWidth mt="md" radius="md"
          required
          label="Listing URL"
        />
        
        <Group>
          <Button
          size="xl" color="blue" fullWidth mt="md" radius="md"
          onClick={() => {
            const newJob = {title, company, url}
            console.log(newJob)
            axios.post('/api/addNewJob', newJob).catch(error => console.log('Error in AddCard.jsx: ', error))
            setTitle('');
            setCompany('');
            setURL('');
            setOpened(false);
            
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
              margin: 20
          }})}
          size="lg" variant="outline" fullWidth mt="md" radius="md"
          onClick={() => setOpened(true)}
        >
          Add Job
        </Button>
      </Group>
    </div>
  )
}
