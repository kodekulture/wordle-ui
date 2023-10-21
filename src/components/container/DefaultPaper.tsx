import React, { type ReactNode } from 'react'
import { Paper } from '@mui/material'

interface WrapperProps {
  children: ReactNode
}

const DefaultPaper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Paper style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(167deg, rgba(2,0,36,1) 0%, rgba(56,56,68,1) 75%, rgba(0,0,0,1) 100%)'
    }}>
      {children}
    </Paper>
  )
}

export default DefaultPaper
