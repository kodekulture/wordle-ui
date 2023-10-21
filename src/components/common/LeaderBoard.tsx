import React, { useState, useEffect } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container
} from '@mui/material'

import DefaultContainer from '../container/DefaultContainer'

interface Player {
  username: string
  maxScore: number
}

const LeaderboardComponent: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<Player[]>([])

  useEffect(() => {
    // Simulated data for demonstration
    const mockLeaderboard: Player[] = [
      { username: 'Lordvidex', maxScore: 4 },
      { username: 'Escalopa', maxScore: 3 }
    ]

    setLeaderboard(mockLeaderboard)
  }, [])

  return (
    <DefaultContainer>
      <Container>
        <TableContainer component={Paper} style={{ borderRadius: 5 }}>
          <Table >
            <TableHead>
              <TableRow style={{ background: 'darkgray' }}>
                <TableCell style={{ fontWeight: 'bold' }}>Username</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Correct</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ background: 'gray' }}>
              {leaderboard.map((player, index) => (
                <TableRow key={index}>
                  <TableCell style={{ fontFamily: 'Monospace', fontWeight: 'bold' }}>{player.username}</TableCell>
                  <TableCell style={{ fontFamily: 'Monospace', fontWeight: 'bold' }}>{player.maxScore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </DefaultContainer>
  )
}

export default LeaderboardComponent
