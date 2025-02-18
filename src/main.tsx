import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import EmailList from './components/email-list/EmailList.tsx'
import { Home } from 'lucide-react'
import Provider from './components/Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Home />
      <EmailList />
    </Provider>
  </StrictMode>,
)
