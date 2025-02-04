import React from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams() 
  return (
    <div>
      i am a user {params.username}
    </div>
  )
}

export default User
