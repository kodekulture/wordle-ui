const IsAuthenticated = () => {
  const at = localStorage.getItem('accessToken')

  if (at === undefined || at === null) {
    return false
  }
  if (at === '') {
    return false
  }
  return true
}

export default IsAuthenticated
