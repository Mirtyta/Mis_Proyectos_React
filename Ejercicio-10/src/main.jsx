import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootswatch/dist/flatly/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import './components/ModeSwitch.css'
import { ThemeContextProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
)
