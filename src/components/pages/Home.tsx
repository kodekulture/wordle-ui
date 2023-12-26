// Home.tsx

import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useErrorStore } from '../../hooks/stores'

const Home: React.FC = () => {
  const { clearErrors } = useErrorStore()
  const [roomId, setRoomId] = useState('')
  const [joinError, setJoinError] = useState('')
  const [isJoining, setIsJoining] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const handleRoomIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value.trim().replaceAll(' ', ''))
  }

  useEffect(() => {
    setJoinError('')
  }, [roomId])

  useEffect(() => {
    clearErrors()
  }, [])

  const handleJoinClick = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsJoining(true)

    if (roomId.trim() === '') {
      setJoinError('Room ID is required')
      setIsJoining(false)
      return
    }

    setTimeout(() => {
      setIsJoining(false)

      alert('Join success or error message')
    }, 2000)
  }

  const handleCreateClick = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsCreating(true)

    setTimeout(() => {
      setIsCreating(false)

      alert('Create success or error message')
    }, 2000)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>
      <div style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', padding: 16, borderRadius: 8, boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.6)', width: 500 }}>
        <TextField
          fullWidth
          variant="outlined"
          style={{ marginBottom: 16 }}
          label="Room ID"
          placeholder="Room ID"
          value={roomId}
          onChange={handleRoomIdChange}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 16, borderRadius: 5, width: '100%', backgroundColor: 'black', fontWeight: 'bold', color: '#fff', padding: '8px 16px' }}
          onClick={handleJoinClick}
          disabled={isJoining}
        >
          {isJoining ? 'Joining...' : 'Join Room'}
        </Button>
        <div style={{ color: 'red' }}>{joinError}</div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 16, borderRadius: 5, width: '100%', backgroundColor: 'black', fontWeight: 'bold', color: '#fff', padding: '8px 16px' }}
          onClick={handleCreateClick}
          disabled={isCreating}
        >
          {isCreating ? 'Creating...' : 'Create Room'}
        </Button>
      </div>
    </div>
  )
}

export default Home
