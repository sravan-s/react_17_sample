import { useState } from 'react'
import './App.css'

import SbApp from '@sendbird/uikit-react/App';
import '@sendbird/uikit-react/dist/index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <SbApp
      appId=''
      userId='sendbird'
      nickname='sendbird'
    />
  )
}

export default App
