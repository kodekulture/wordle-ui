import React, { type ReactNode } from 'react'
import { Container } from '@mui/material'

interface WrapperProps {
  children: ReactNode
}

const DefaultContainer: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Container style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', padding: 16, borderRadius: 8, boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.6)', width: '400px' }}>
      {children}
    </Container>
  )
}

export default DefaultContainer
