import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './default.css'
import Poketech from './components/Poketech.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <Poketech />
  </StrictMode>,
)
