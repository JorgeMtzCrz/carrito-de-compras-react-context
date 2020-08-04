import React from 'react'

import './App.css'
import Router from './Router'
import ContextProvider from './Context'

function App() {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  )
}

export default App
