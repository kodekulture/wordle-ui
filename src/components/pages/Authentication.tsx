import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LoginIcon from '@mui/icons-material/Login'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { server } from '../../network/Url'

const AuthenticationPage: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value.trim().replaceAll(' ', '') })
    setErrors({
      username: formData.username !== '' && formData.username.length < 3 ? 'Username must be at least 3 characters' : '',
      password: formData.password !== '' && formData.password.length < 8 ? 'Password must be at least 8 characters' : ''
    })
  }

  useEffect(() => {
    if (formData.username === '' || formData.password === '' || Object.values(errors).some((error) => error !== '')) {
      setIsSubmitDisabled(true)
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

    const formUserData = {
      username: formData.username,
      password: formData.password
    }

    try {
      const { data } = await server.post('/login', formUserData)

      localStorage.setItem('accessToken', data['access_token'])
      console.log('success')
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>
      <div style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', padding: 16, borderRadius: 8, boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.6)', width: 300 }}>
          <h2 style={{ color: '#fff', textAlign: 'center' }}>
            <LoginIcon style={{ fontSize: '48px', color: 'black', marginRight: 16, verticalAlign: 'middle', marginBottom: 1 }}/>
          </h2>
          <form onSubmit={handleSubmit}>
          <TextField
            name="username"
            fullWidth
            variant="outlined"
            label="Username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={{ marginTop: 16 }}
          />
          <div style={{ color: 'red' }}>{errors.username}</div>
          <TextField
            name="password"
            fullWidth
            variant="outlined"
            label="Password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
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
          <div style={{ color: 'red' }}>{errors.password}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 32, borderRadius: 5, backgroundColor: 'black', fontWeight: 'bold', color: '#fff', padding: '10px 16px' }}
            disabled={isSubmitDisabled || loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AuthenticationPage
