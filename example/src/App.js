import React, { useState } from 'react'

import {
  Message,
  MessageWrapper,
  MessageContent,
  ThemeProvider,
  dark,
  light
} from 'react-discord-components'

import Theme from './assets/theme'

const App = () => {
  const [isDark, setDark] = useState(true)

  const handleSwitchTheme = () => setDark(!isDark)

  return <section>
    <button className="themeSwitch" onClick={handleSwitchTheme}>
      <Theme />
    </button>
    <ThemeProvider theme={isDark ? dark : light}>
      <MessageWrapper style={{
        borderRadius: 3,
        boxShadow: `2px 2px 13px 3px rgba(0, 0, 0, 0.3)`
      }}>
        <Message
          avatar={'https://cdn.discordapp.com/avatars/205873263258107905/371057e23d50433365fbf9599d810826.webp?size=128'}
        >
          <MessageContent
            author={{
              color: '#2ad1a4',
              user: 'metehus'
            }}
          >
            Como *você* vai, **bladey**, ta `daora`?
          </MessageContent>
        </Message>
        <Message
          avatar={'https://cdn.discordapp.com/avatars/445277324175474689/f57d8a09a934d7ae9e857bcc0a0ef741.webp'}
        >
          <MessageContent
            author={{
              color: '#7289DA',
              user: 'Switchblade',
              bot: true,
              verified: true
            }}
          >oi eu sou um bot muito **bobão**</MessageContent>
        </Message>
      </MessageWrapper>
    </ThemeProvider>
  </section>
}

export default App
