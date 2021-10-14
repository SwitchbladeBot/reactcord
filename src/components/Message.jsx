import React from 'react'
import styled from 'styled-components'

const MessageScaffold = styled.div`
  padding: 16px;
  display: flex;
`

const Avatar = styled.div`
  margin-right: 16px;
`

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export default function Message({ avatar, children }) {
  return (
    <MessageScaffold>
      <Avatar>
        <Image src={avatar} />
      </Avatar>
      {children}
    </MessageScaffold>
  )
}
