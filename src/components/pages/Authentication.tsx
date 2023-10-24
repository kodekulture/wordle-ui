import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { TextField, FormHelperText } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import { useLogin } from '../../handler/Login'
import DefaultPaper from '../container/DefaultPaper'
import DefaultContainer from '../container/DefaultContainer'
import DefaultButton from '../container/DefaultButton'
import withAuthentication from '../../global/AuthWrapper'

const Authentication: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value.trim().replaceAll(' ', '') })
  }

  const handleBlur = () => {
    setErrors({
      username: formData.username !== '' && formData.username.length < 3 ? 'Username must be at least 3 characters' : '',
      password: formData.password !== '' && formData.password.length < 8 ? 'Password must be at least 8 characters' : ''
    })
  }

  useEffect(() => {
    if (formData.username === '' || formData.password === '' || Object.values(errors).some((error) => error !== '')) {
      return
    }
    setIsSubmitDisabled(false)
  }, [errors])

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const response = await useLogin(formData)
    if (response.success) {
      <Navigate to="/" />
    } else {
      alert(response.message)
    }
    setLoading(false)
  }

  return (
      <DefaultPaper>
      <DefaultContainer>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <LoginIcon style={{ padding: 16, fontSize: '48px', color: 'black', marginRight: 16, verticalAlign: 'middle', marginBottom: 1 }}/>
          </div>
          <form>
          <TextField
            name="username"
            fullWidth
            variant="outlined"
            label="Username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginTop: 16 }}
          />
          <FormHelperText style={{ color: 'red' }}>{errors.username}</FormHelperText>
          <TextField
            name="password"
            fullWidth
            variant="outlined"
            label="Password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginTop: 16 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <FormHelperText style={{ color: 'red' }}>{errors.password}</FormHelperText>
          <DefaultButton
            text={loading ? 'Loading...' : 'Login'}
            disabled={isSubmitDisabled}
            onClick={handleSubmit}
          />
        </form>
      </DefaultContainer>
    </DefaultPaper>
  )
}

export default withAuthentication(Authentication, false)
