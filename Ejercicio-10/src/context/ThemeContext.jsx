import {createContext, useContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children}) => {
 const [contextTheme, setContextTheme] = useState('light');
 const values = {contextTheme, setContextTheme}


  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )

}
// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  return context

}