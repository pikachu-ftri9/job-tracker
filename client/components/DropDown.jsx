import React, {useState} from 'react'
import { Select } from '@mantine/core';

export default function DropDown() {
   const [value, setValue] = useState('');
  return (
    <>
      <Select
        value={value} onChange={setValue}
        label="Job Status"
        placeholder="Pick one"
        data={[
          { value: 'Applied', label: 'Applied' },
          { value: 'Callbacks', label: 'Callbacks' },
          { value: 'Interviews', label: 'Interviews' },
          { value: 'Offers', label: 'Offers' },
        ]}
      />
    </>
  )
}