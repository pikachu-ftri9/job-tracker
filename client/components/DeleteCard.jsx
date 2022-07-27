import React, { useState } from 'react';
import { Modal, Button, Group, TextInput } from '@mantine/core'
import { IconTrash } from '@tabler/icons';
import axios from 'axios';

export default function DeleteCard({id}) {

  const deleteCard = () => {
    // alert(id);
    axios.delete('/api/delete', {data: {_id: id}})
      .catch(error => console.log('Error caught in DeleteCard.jsx', error))
  }

  return (
    <div style={{alignItems: "flex-end"}}>
        

      <Group position="right">
        <Button 
        
          styles={() => ({
            root: {
              marginLeft: 5,
              marginBottom: 2
          }})}
          size="lg" color="red" variant="outline" compact mt="md" radius="sm"
          onClick={deleteCard}
        >
          <IconTrash/>
        </Button>
      </Group>
    </div>
  )
}
