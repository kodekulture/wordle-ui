import React from 'react'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'

import Chat from '../common/Chat'
import Board from '../common/Board'
import Leaderboard from '../common/LeaderBoard'
import DefaultPaper from '../container/DefaultPaper'
import IsAuthenticated from '../helper/IsAuthenticated'

const Game: React.FC = () => {
  // Authentication
  if (!IsAuthenticated()) {
    window.location.href = '/login'
  }

  // `token` is used to connect to game's websocket channel
  const { token } = useParams()
  if (token === undefined || token === null) {
    window.location.href = '/home'
  }

  // TODO: Connect to websocket channel using `token`, On error redirect to home

  return (
    <DefaultPaper>
      <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ margin: '10px' }}>
            <Chat />
          </div>
          <div style={{ margin: '10px' }}>
            <Board />
          </div>
          <div style={{ margin: '10px' }}>
            <Leaderboard />
          </div>
      </Container>
      </DefaultPaper>
  )
}

export default Game
