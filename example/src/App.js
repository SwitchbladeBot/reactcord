import React, { useState } from 'react'

import {
  Message,
  MessageWrapper,
  MessageContent,
  ThemeProvider,
  MessageEmbed,
  dark,
  light
} from 'reactcord'

import Theme from './assets/theme'

const App = () => {
  const [isDark, setDark] = useState(true)

  const handleSwitchTheme = () => setDark(!isDark)

  return <section>
    <button className="themeSwitch" onClick={handleSwitchTheme}>
      <Theme/>
    </button>
    <ThemeProvider theme={isDark ? dark : light}>
      <MessageWrapper style={{
        borderRadius: 3,
        boxShadow: `2px 2px 13px 3px rgba(0, 0, 0, 0.3)`,
        maxWidth: 800
      }}>
        <Message
          avatar={'https://cdn.discordapp.com/avatars/205873263258107905/62b8cf8c20107e61b51b8194ac716c53.webp?size=256'}
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
          >

            <MessageEmbed
              title="bobao"
              author={{
                name: 'pipipi popopo',
                icon: 'https://cdn.discordapp.com/attachments/696797678356398671/744044111157526548/20200814_192551.jpg'
              }}
              footer={{
                text: 'bom dia amigo',
                icon: 'https://cdn.discordapp.com/attachments/696797678356398671/744778541245268038/unknown.png'
              }}
              color="#03fc84"
              thumbnail="https://cdn.discordapp.com/attachments/696797678356398671/745052530714869780/IMG-20200817-WA0021.jpeg"
              image="https://cdn.discordapp.com/attachments/696797678356398671/744681438649122866/FB_IMG_1597616284534.jpg"
              fields={[
                {
                  name: 'bom dia',
                  value: 'teste'
                },
                {
                  name: 'bom dia',
                  value: 'teste'
                },
                {
                  name: 'pedro é oq',
                  value: 'bobao',
                  inline: true
                },
                {
                  name: 'davi tb?',
                  value: 'ss',
                  inline: true
                }
              ]}
            >
              Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare
              consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Quem num gosta di mim que vai caçá
              sua turmis! Suco de cevadiss deixa as pessoas mais interessantis.
            </MessageEmbed>
          </MessageContent>
        </Message>
      </MessageWrapper>
    </ThemeProvider>
  </section>
}

export default App
