import {useState} from 'react'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => { 
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
  return (
      <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <div>User is logged ${isLoggedIn ? 'logged in' : 'logged out'} </div>
    </div>
  )
}

export default Login