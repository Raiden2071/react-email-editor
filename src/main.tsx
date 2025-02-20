import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Provider from './components/Provider.tsx'
import Home from './components/pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Home />
    </Provider>
  </StrictMode>,
)
