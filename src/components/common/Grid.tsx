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
      return '#006E33'
    case 2:
      return '#F6BE00'
    case 1:
      return '#AB2328'
    default:
      return 'gray'
  }
}

const Row: React.FC<RowProps> = ({ word }) => {
  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
      {word.map((cell, index) => (
        <Grid key={index}>
          <Paper
            elevation={5}
            style={{
              minWidth: '65px',
              height: '65px',
              margin: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colorByState(cell.state),
              opacity: 0.8
            }}>
            <Typography
              variant="h3"
              fontWeight={'bold'}
              color={'white'}>
                {cell.letter.toUpperCase()}
            </Typography>
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
    <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 20, minWidth: '400px' }}>
      {gridData.map((word, index) => (
        <Row key={index} word={word} />
      ))}
    </Grid>
  )
}

export { GameGrid, type Cell }
