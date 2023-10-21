import React, { type ReactNode } from 'react'
import { Container } from '@mui/material'

interface WrapperProps {
  children: ReactNode
}

const DefaultContainer: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Container style={{
      background: 'linear-gradient(167deg, rgba(117,117,129,1) 0%, rgba(56,56,68,1) 100%, rgba(0,0,0,1) 100%)',
      padding: 16,
      borderRadius: 8,
      boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.6)',
      width: 'fit-content'
    }}>
      {children}
    </Container>
  )
}

export default DefaultContainer
