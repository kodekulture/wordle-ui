import React, {
  useState,
  useEffect
  // useRef
} from 'react'

import DefaultContainer from '../container/DefaultContainer'
import DefaultButton from '../container/DefaultButton'
import { type Cell, GameGrid } from './Grid'

const BoardComponent = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  // const inputRef = useRef(null)

  const handleStartGame = () => {
    setIsGameStarted(true)
  }

  // const letterRegex = /^[a-zA-Z]$/

  const handleGuessWord = () => {

  }
  const handleKeyDown = (event: KeyboardEvent) => {
    // Check if the active element is the input field
    // if (inputRef == null || inputRef.current !== document.activeElement) {
    //   return
    // }

    if (event.key === 'Enter') {
      handleGuessWord()
    }

    // Check if input is a letter
    // if (!letterRegex.test(event.key)) {
    //   return
    // }

    console.log('Key pressed:', event.key)
  }

  useEffect(() => {
    // Attach the event listener to the document
    document.addEventListener('keydown', handleKeyDown)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Sample data for the grid, you can replace this with your own data
  const gridData: Cell[][] = [
    [{ letter: 'A', state: 3 }, { letter: 'B', state: 2 }, { letter: 'C', state: 2 }, { letter: 'D', state: 3 }, { letter: 'E', state: 1 }],
    [{ letter: 'F', state: 1 }, { letter: 'G', state: 3 }, { letter: 'H', state: 1 }, { letter: 'I', state: 2 }, { letter: 'J', state: 2 }],
    [{ letter: 'K', state: 2 }, { letter: 'L', state: 2 }, { letter: 'M', state: 2 }, { letter: 'N', state: 3 }, { letter: 'O', state: 3 }],
    [{ letter: 'P', state: 3 }, { letter: 'Q', state: 1 }, { letter: 'R', state: 3 }, { letter: 'S', state: 2 }, { letter: 'T', state: 2 }],
    [{ letter: 'U', state: 2 }, { letter: 'V', state: 3 }, { letter: 'W', state: 3 }, { letter: 'X', state: 3 }, { letter: 'Y', state: 1 }],
    [{ letter: 'R', state: 0 }, { letter: '', state: 0 }, { letter: '', state: 0 }, { letter: '', state: 0 }, { letter: '', state: 0 }]
  ]

  return (
      <DefaultContainer>
          <GameGrid gridData={gridData} />
          <DefaultButton
            text='Start Game'
            onClick={handleStartGame}
            disabled={isGameStarted}
          />
      </DefaultContainer>
  )
}

export default BoardComponent
