import React from 'react'
import styled from 'styled-components'
import MessageHeader from './MessageHeader'
import ReactMarkdown from 'react-markdown'

const MessageScaffold = styled.div`
  & > p {
    margin: 0px
  }
`

export default function MessageContent({ children, author }) {
  return <div>
    <MessageHeader {...author} />
    <MessageScaffold>
      <ReactMarkdown
        unwrapDisallowed
        allowedTypes={['root', 'text', 'strong', 'paragraph', 'emphasis', 'code', 'inlineCode', 'break', 'blockquote']}
      >
        {children}
      </ReactMarkdown>
    </MessageScaffold>
  </div>
}
