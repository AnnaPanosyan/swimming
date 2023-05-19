import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Feedback = () => {
  const [value,setValue]=useState(2.5)
  return (
    <div className='feedback'>
      <h2>Feedback</h2>
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={value} precision={0.5}  />

    </Stack>
  

    </div>
  )
}

export default Feedback