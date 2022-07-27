import React, {useState} from 'react'
import { Select } from '@mantine/core';
import axios from 'axios';

export default function DropDown({id}) {
   const [value, setValue] = useState('');
  //  const makePatchRequest = () => {
    // axios.patch('api/update', {_id: id, status: value}).catch(error => console.log(error))
  //  }
  return (
    <>
      <Select
        value={value} 
        onChange={(e)=> {
          setValue(e);
          console.log({_id: id, status: e});

          axios.patch('/api/update', {_id: id, status: e}).catch(error => console.log(error))
        }}
        // onDropdownClose={()=> {
        //   axios.patch('api/update', {_id: id, status: value}).catch(error => console.log(error))
        // }}
        label="Job Status"
        placeholder="Pick one"
        data={[
          { value: 'Applied', label: 'Applied' },
          { value: 'Callback', label: 'Callbacks' },
          { value: 'Interview', label: 'Interviews' },
          { value: 'Offer', label: 'Offers' },
        ]}
      />
    </>
  )
}