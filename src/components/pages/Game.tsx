import React from 'react'
import { Container } from '@mui/material'

import Chat from '../common/Chat'
import Board from '../common/Board'
import Leaderboard from '../common/LeaderBoard'
import DefaultPaper from '../container/DefaultPaper'

const Game: React.FC = () => {
  return (
    <DefaultPaper>
      <Container style={{ display: 'flex', flexDirection: 'row', borderRadius: 8 }}>
          <div style={{ margin: '16px' }}>
            <Chat />
          </div>
          <div style={{ margin: '16px' }}>
            <Board />
          </div>
          <div style={{ margin: '16px' }}>
            <Leaderboard />
          </div>
        </Container>
      </DefaultPaper>
  )
}

export default Game
