import React, { useState } from 'react';
import { Modal, Button, Group, TextInput } from '@mantine/core'

export default function AddCard() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Please fill out this form"
      >
        {/* Modal content */}
        <TextInput
          label="Job Title"
        />
        <TextInput
          label="Company Name"
        />
        <TextInput
          label="Listing URL"
        />
        <Group>
          <Button
          onClick={() => setOpened(false)}
          >
            Close
          </Button>
        </Group>
      </Modal>

      <Group position="center">
        <Button 
          styles={() => ({
            root: {
              margin: "0, 20"
          }})}
          size="lg"
          id="addJobButton"
          variant="light" 
          onClick={() => setOpened(true)}
        >
          Add Job
        </Button>
      </Group>
    </>
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
