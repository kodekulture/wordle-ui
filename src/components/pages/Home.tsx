import React, { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
import { TextField, FormHelperText } from '@mui/material'
import GamepadIcon from '@mui/icons-material/Gamepad'
import Button from '@mui/material/Button'

import { CreateGameHandler } from '../../handler/Create'
import { JoinGameHandler } from '../../handler/Join'

import DefaultPaper from '../container/DefaultPaper'
import DefaultContainer from '../container/DefaultContainer'
import IsAuthenticated from '../helper/IsAuthenticated'

const Home: React.FC = () => {
  // Authentication
  if (!IsAuthenticated()) {
    window.location.href = '/login'
  }

  const [roomId, setRoomId] = useState('')
  const [joinError, setJoinError] = useState('')
  const [createError, setCreateError] = useState('')
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

    const response = await JoinGameHandler({ id: roomId })
    if (response.success) {
      window.location.href = `/game/${response.token}`
    } else {
      setJoinError(response.message)
    }

    setIsJoining(false)
  }

  const handleCreateClick = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsCreating(true)

    const response = await CreateGameHandler()
    if (response.success) {
      setRoomId(response.id)
    } else {
      setCreateError(response.message)
    }

    setIsCreating(false)
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
          placeholder="Paste room-id here"
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
        <FormHelperText style={{ color: 'red' }}>{joinError}</FormHelperText>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 16, borderRadius: 5, width: '100%', backgroundColor: 'black', fontWeight: 'bold', color: '#fff', padding: '8px 16px' }}
          onClick={handleCreateClick}
          disabled={isCreating}
        >
          {isCreating ? 'Creating...' : 'Create Room'}
        </Button>
        <FormHelperText style={{ color: 'red' }}>{createError}</FormHelperText>
        </DefaultContainer>
    </DefaultPaper>
  )
}

export default Home
