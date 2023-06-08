import { useState } from 'react'
import './App.css'
import Login from './Login';
import SignUp from './SignUp';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  

  return (
    <>
    <SignUp username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
    <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} />


    </>
  )
}

export default App
