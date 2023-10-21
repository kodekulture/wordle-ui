import React, { useState } from 'react'
import {
  TextField,
  List,
  ListItem,
  ListItemText
} from '@mui/material'

import DefaultContainer from '../container/DefaultContainer'
import DefaultButton from '../container/DefaultButton'
import './scroll.css'

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState<string>('')

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage])
      setNewMessage('')
    }
  }

  return (
    <DefaultContainer>
      <div
        style={{
          flex: 1,
          border: '1px solid #ccc',
          padding: '8px',
          overflowY: 'scroll',
          width: '350px',
          height: '400px'
        }}
      >
        <List style={{ minHeight: '400px' }}>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText primary={message} />
            </ListItem>
          ))}
        </List>
      </div>
      <div style={{ marginTop: '16px', flexDirection: 'column', display: 'flex', padding: '8px' }}>
        <TextField
          fullWidth
          placeholder='Enter your message'
          variant='outlined'
          value={newMessage}
          onChange={(e) => { setNewMessage(e.target.value) }}
        />
        <DefaultButton
          text='Send Message'
          disabled={newMessage.trim() === ''}
          onClick={handleSendMessage}
        />

      </div>

    </DefaultContainer>
  )
}

export default ChatComponent
