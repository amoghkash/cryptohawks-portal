import React from 'react'
import ReactDOM from 'react-dom/client'
import Entrypoint from './Entrypoint';
import { CookiesProvider } from "react-cookie";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CookiesProvider>
      <Entrypoint />
    </CookiesProvider>
)
