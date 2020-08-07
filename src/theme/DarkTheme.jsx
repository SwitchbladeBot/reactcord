import React from 'react'
import { ThemeProvider } from 'styled-components'
import dark from './dark'

const DarkTheme = ({ children }) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
)

export default DarkTheme
