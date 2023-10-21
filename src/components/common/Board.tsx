import React, { useState } from 'react'
import { TextField } from '@mui/material'

import DefaultContainer from '../container/DefaultContainer'
import DefaultButton from '../container/DefaultButton'
import { type Cell, GameGrid } from './Grid'

const BoardComponent = () => {
  const [word, setWord] = useState('')
  const [isGameStarted, setIsGameStarted] = useState(false)

  const handleStartGame = () => {
    setIsGameStarted(true)
  }

  const handleGuessWord = () => {
    // Implement word validation and scoring logic
  }

  // Sample data for the grid, you can replace this with your own data
  const gridData: Cell[][] = [
    [{ letter: 'A', state: 3 }, { letter: 'B', state: 2 }, { letter: 'C', state: 2 }, { letter: 'D', state: 3 }, { letter: 'E', state: 1 }],
    [{ letter: 'F', state: 1 }, { letter: 'G', state: 3 }, { letter: 'H', state: 1 }, { letter: 'I', state: 2 }, { letter: 'J', state: 2 }],
    [{ letter: 'K', state: 2 }, { letter: 'L', state: 2 }, { letter: 'M', state: 2 }, { letter: 'N', state: 3 }, { letter: 'O', state: 3 }],
    [{ letter: 'P', state: 3 }, { letter: 'Q', state: 1 }, { letter: 'R', state: 3 }, { letter: 'S', state: 2 }, { letter: 'T', state: 2 }],
    [{ letter: 'U', state: 2 }, { letter: 'V', state: 3 }, { letter: 'W', state: 3 }, { letter: 'X', state: 3 }, { letter: 'Y', state: 1 }],
    [{ letter: '.', state: 0 }, { letter: '.', state: 0 }, { letter: '.', state: 0 }, { letter: '.', state: 0 }, { letter: '.', state: 0 }]
  ]

  return (
      <DefaultContainer>
        <div style={{ width: '100%', flexDirection: 'column', display: 'flex' }}>
          <GameGrid gridData={gridData} />
           <TextField
              fullWidth
              label="Enter a word"
              variant="outlined"
              value={word}
              onChange={(e) => { setWord(e.target.value) }}
            />
            <DefaultButton
              text='Submit Word'
              onClick={handleGuessWord}
              disabled={word.length !== 5}
            />
            <DefaultButton
              text='Start Game'
              onClick={handleStartGame}
              disabled={isGameStarted}
            />
        </div>
      </DefaultContainer>
  )
}

export default BoardComponent
