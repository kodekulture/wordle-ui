import React from 'react'
import Button from '@mui/material/Button'

interface WrapperProps {
  text: string
  disabled: boolean
  onClick: (e: React.FormEvent) => void
}

const DefaultButton: React.FC<WrapperProps> = ({ text, disabled, onClick }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      onClick={onClick}
      style={{ marginTop: 16, borderRadius: 5, backgroundColor: 'black', fontWeight: 'bold', color: '#fff', padding: '10px 16px' }}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}

export default DefaultButton
