import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import LoginContextProvider from './Context/LoginContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
      
    </BrowserRouter>
)
