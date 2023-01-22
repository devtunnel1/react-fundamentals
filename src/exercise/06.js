// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef()
  const [username, setUsername] = React.useState('')
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const value = usernameRef.current.value
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const { value } = event.target
    setUsername(value)
    setError(value === value.toLowerCase() ? null : 'Username must be in lowercase')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input
          type="text"
          id='usernameInput'
          ref={usernameRef}
          onChange={handleChange}
          value={username}
        />
        { error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
