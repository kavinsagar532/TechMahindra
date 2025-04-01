import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Kavin from './Kavin.jsx'
import {Greetings} from './Kavin.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById('kavin')).render(
  <StrictMode>
    <Kavin />
  </StrictMode>
)

createRoot(document.getElementById('greet')).render(
  <StrictMode>
    <Greetings />
  </StrictMode>
)