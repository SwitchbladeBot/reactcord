import React from 'react'
import MessageHeader from './MessageHeader'
import MessageText from './MessageText'

export default function MessageContent({ children, author }) {
  return (
    <div>
      {author && <MessageHeader {...author} />}
      {typeof children === 'string' ? (
        <MessageText>{children}</MessageText>
      ) : (
        children
      )}
    </div>
  )
}
