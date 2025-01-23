import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserContext from './context/UserContext.tsx'
import {CaptainProvider} from './context/CapatainContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CaptainProvider>
      <UserContext>
        <App />
      </UserContext>
    </CaptainProvider>
  </StrictMode>,
)
