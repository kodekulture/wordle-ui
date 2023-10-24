import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'

import Chat from '../common/Chat'
import Board from '../common/Board'
import Leaderboard from '../common/LeaderBoard'
import DefaultPaper from '../container/DefaultPaper'
import { useLiveConnect } from '../../handler/Live'
import withAuthentication from '../../global/AuthWrapper'

const Game: React.FC = () => {
  useEffect(() => {
    const { token } = useParams()
    if (token === undefined || token === null) {
      window.location.href = '/home'
    }

    const ws = useLiveConnect(String(token))
    ws.onmessage = (event) => {
      console.log(event.data)
    }
    ws.onopen = () => {
      console.log('Connected')
    }
    ws.onclose = () => {
      console.log('Disconnected')
    }
  }, [])

  return (
    <DefaultPaper>
      <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ margin: '10px' }}>
            <Chat handleSendMessage={(message: string) => { console.log(message) }}/>
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

export default withAuthentication(Game, true)
