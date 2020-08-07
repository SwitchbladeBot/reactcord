import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const ThemeProvider = ({ children, theme }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
)

export default ThemeProvider
