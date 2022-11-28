import React from 'react'
import ReactDOM from 'react-dom/client'
import Entrypoint from './Entrypoint';
import { CookiesProvider } from "react-cookie";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <Entrypoint />
    </CookiesProvider>
  </React.StrictMode>
)
