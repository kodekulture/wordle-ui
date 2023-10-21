import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

interface Cell {
  letter: string
  state: number
}

interface RowProps {
  word: Cell[]
}

const colorByState = (state: number) => {
  switch (state) {
    case 3:
      return 'green'
    case 2:
      return 'yellow'
    case 1:
      return 'red'
    default:
      return 'gray'
  }
}

const Row: React.FC<RowProps> = ({ word }) => {
  return (
    <Grid container >
      {word.map((cell, index) => (
        <Grid key={index}>
          <Paper style={{
            width: '50px',
            margin: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorByState(cell.state)
          }}>
            <Typography color='white' variant="h4">{cell.letter}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

interface GridProps {
  gridData: Cell[][]
}
const GameGrid: React.FC<GridProps> = ({ gridData }) => {
  return (
    <Grid style={{ borderColor: 'gray', borderStyle: 'solid', borderRadius: 8, marginBottom: 32, padding: 5 }}>
      {gridData.map((word, index) => (
        <Row key={index} word={word} />
      ))}
    </Grid>
  )
}

export { GameGrid, type Cell }
