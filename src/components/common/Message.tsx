import React from 'react'
import { Container, Typography } from '@mui/material'

interface MesssageProps {
  message: string
  sender: string
}

const Message: React.FC<MesssageProps> = ({ message, sender }) => {
  if (sender === '') {
    sender = '🤖'
  }

  return (
    <Container style={{ backgroundColor: '#eee', borderRadius: 8, alignContent: 'center', padding: '10px', wordWrap: 'break-word' }}>
      <Typography variant="body2" fontWeight={'bold'} style={{ marginBottom: '4px' }}>{ sender }</Typography>
      <Typography variant="body1">{message}</Typography>
    </Container>
  )
}

export default Message
