const IsAuthenticated = () => {
  const at = localStorage.getItem('accessToken')
  const rt = localStorage.getItem('refreshToken')

  if (at === undefined || rt === undefined || at === null || rt === null) {
    return false
  }
  if (at === '' || rt === '') {
    return false
  }
  return true
}

export default IsAuthenticated
