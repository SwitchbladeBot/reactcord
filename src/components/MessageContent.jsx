import React from 'react'
import styled from 'styled-components'
import MessageHeader from './MessageHeader'

const MessageScaffold = styled.div`
  & > p {
    margin: 0px
  }
`

export default function MessageContent({ children, author }) {
  return <div>
    <MessageHeader {...author} />
    <MessageScaffold>
      {children}
    </MessageScaffold>
  </div>
}
