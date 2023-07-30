'use client'
import { useDebounce } from '@/utils/hooks'
import React from 'react'

function Profile() {
  const handleClick = useDebounce(() => {
    console.log('click'); 
  }, 1000)
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Profile