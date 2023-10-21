import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import GamepadIcon from '@mui/icons-material/Gamepad'
import Button from '@mui/material/Button'

import DefaultPaper from '../container/DefaultPaper'
import DefaultContainer from '../container/DefaultContainer'

const Home: React.FC = () => {
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
    <DefaultPaper>
      <DefaultContainer>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <GamepadIcon style={{ padding: 16, fontSize: '48px', color: 'black', marginRight: 16, verticalAlign: 'middle', marginBottom: 1 }}/>
        </div>
        <TextField
          fullWidth
          variant="outlined"
          style={{ marginTop: 16 }}
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
        </DefaultContainer>
    </DefaultPaper>
  )
}

export default Home
