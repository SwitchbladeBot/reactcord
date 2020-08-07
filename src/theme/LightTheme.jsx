import React from 'react'
import { ThemeProvider } from 'styled-components'
import light from './light'

const LightTheme = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
)

export default LightTheme
