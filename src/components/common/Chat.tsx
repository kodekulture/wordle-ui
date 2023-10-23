import React, { useState } from 'react'
import {
  TextField,
  List,
  ListItem,
  Container
} from '@mui/material'

import DefaultContainer from '../container/DefaultContainer'
import DefaultButton from '../container/DefaultButton'
import Message from './Message'
import './scroll.css'

const ChatComponent: React.FC = () => {
  interface Message {
    message: string
    sender: string
  }

  const [messages, setMessages] = useState<Message[]>([
    { message: 'Hello', sender: 'You' },
    { message: 'How are you?', sender: '' },
    { message: 'I am good, thanks!', sender: 'You' },
    { message: 'Evans Has joined?', sender: '' }
  ])
  const [newMessage, setNewMessage] = useState<string>()

  const handleSendMessage = () => {
    if (newMessage === undefined) {
      return
    }

    if (newMessage.trim() !== '') {
      setMessages([...messages, { message: newMessage, sender: 'You' }])
      setNewMessage('')
    }
  }

  return (
    <DefaultContainer>
      <Container
        style={{
          flex: 1,
          border: '1px solid #ccc',
          overflowY: 'scroll',
          width: '400px',
          height: '400px',
          padding: '2px',
          borderRadius: '5px'
        }}
      >
        <List style={{
          minHeight: '400px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {messages.map((message, index) => (
            <ListItem key={index}>
                <Message message={message.message} sender={message.sender} />
            </ListItem>
          ))}
        </List>
      </Container>

      {/* Typing & Sending message  */}

      <Container style={{
        marginTop: '16px',
        flexDirection: 'column',
        display: 'flex',
        padding: '8px'
      }}>
        <TextField
          fullWidth
          id='typing-input'
          placeholder='Enter your message'
          variant='outlined'
          value={newMessage}
          onChange={(e) => { setNewMessage(e.target.value) }}
        />
        <DefaultButton
          text='Send Message'
          disabled={newMessage?.trim() === ''}
          onClick={handleSendMessage}
        />

      </Container>
    </DefaultContainer>
  )
}

export default ChatComponent
