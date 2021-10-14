import React from 'react'
import chroma from 'chroma-js'
import styled from 'styled-components'
import ChannelIcon from '../assets/channel'

const MentionWrapper = styled.span`
  border-radius: 3px;
  padding: 2px 2px;
  margin: 0 2px;
  color: ${({ color }) =>
    color ? chroma(color).hex() : 'rgba(255, 255, 255, 0.92)'};
  background: ${({ theme, color }) =>
    color
      ? chroma(color).alpha(0.1)
      : chroma(theme.palette.blurple).alpha(0.3)};
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background: ${({ theme, color }) =>
      color ? chroma(color).alpha(0.3) : theme.palette.blurple};
  }
`

export default function Mention(props) {
  const isChannel =
    typeof props.children === 'string' ? props.children[0] === '#' : false

  console.log(isChannel)

  return (
    <MentionWrapper {...props}>
      {isChannel && <ChannelIcon />}
      {isChannel ? props.children.slice(1) : props.children}
    </MentionWrapper>
  )
}
