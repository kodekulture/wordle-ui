import React, { type ReactNode } from 'react'
import { Paper } from '@mui/material'

interface WrapperProps {
  children: ReactNode
}

const DefaultPaper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: 'linear-gradient(to bottom, #FFC0CB, #87CEEB)' }}>
      {children}
    </Paper>
  )
}

export default DefaultPaper
