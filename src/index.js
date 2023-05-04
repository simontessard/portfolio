import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import Routing from './Router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
)
