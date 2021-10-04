import React, { useState } from 'react'

import {
  Message,
  MessageWrapper,
  MessageContent,
  ThemeProvider,
  MessageEmbed,
  dark,
  light,
  MessageText,
  Mentions,
  Mention
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
        maxWidth: 800,
        margin: '80px 0'
      }}>
        <Message
          avatar={'https://media.discordapp.net/attachments/445647209892020234/894373458232901682/e8ef68ca770be9f28226ad76a3ce3c1f.png'}
        >
          <MessageContent
            author={{
              color: '#2ad1a4',
              user: 'metehus'
            }}
          >
            <MessageText>
            Como *você* vai, **bladey**, ta `daora` 👀?
            </MessageText>
              <MessageContent>
              Diz aí <Mention>@Switchblade</Mention>
              </MessageContent>
          </MessageContent>
        </Message>
        <Message
          avatar={'https://media.discordapp.net/attachments/445647209892020234/894373564323606538/60649075b98ef858edab5d3bcd000446.png'}
        >
          <MessageContent
            author={{
              color: '#5865f2',
              user: 'Switchblade',
              bot: true,
              verified: true
            }}
          >
            <MessageText>This is an **embed**:</MessageText>

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
              image="https:///64.media.tumblr.com/ec9059ee71079dcd7c535add13e46f9d/5dafeb09e955b046-af/s1280x1920/68fed187afcf752338af1401ffbca6d0d3e257c1.gif"
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
              consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.

              [Click me!!](https://youtu.be/iik25wqIuFo)
            </MessageEmbed>
          </MessageContent>
        </Message>
        <Message
        avatar={'https://media.discordapp.net/attachments/445647209892020234/894373458232901682/e8ef68ca770be9f28226ad76a3ce3c1f.png'}
        >
          <MessageContent
            author={{
              color: '#2ad1a4',
              user: 'metehus'
            }}
          >
            <MessageText>
              chamando todos os 
            </MessageText>
            <Mention color="#9b59b6">@Legacy Front-end Developer</Mention>
            <MessageText>
              pra
            </MessageText>
            <Mention>#festinha</Mention>
          </MessageContent>
        </Message>
      </MessageWrapper>
    </ThemeProvider>
  </section>
}

export default App
