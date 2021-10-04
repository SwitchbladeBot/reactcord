import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Twemoji from 'react-twemoji'

const MessageStyles = styled.div`
  display: inline;

  & strong {
    font-weight: 700;
  }

  & p {
    margin: 0;
    display: inline;
    margin-block-start: unset;
    margin-block-end: unset;
    margin-inline-start: unset;
    margin-inline-end: unset;
  }

  & code {
    width: auto;
    height: auto;
    padding: 0.2em;
    margin: -0.2em 0;
    border-radius: 3px;
    line-height: 1.125rem;
    font-size: 85%;
    font-family: Consolas, Andale Mono WT, Andale Mono, Lucida Console,
      Lucida Sans Typewriter, monospace;
    text-indent: 0;
    border: none;
    white-space: pre-wrap;
    background-color: ${({ theme }) => theme.palette.backgroundSecondary};
  }

  & .emoji {
    object-fit: contain;
    width: 1.375em;
    height: 1.375em;
    vertical-align: bottom;
    display: inline;
  }

  & a {
    color: ${({ theme }) => theme.palette.linkColor};
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & > div {
    display: inline;
  }
`

export default function MessageText({ children }) {
  return (
    <MessageStyles>
      <Twemoji>
        <ReactMarkdown>{children}</ReactMarkdown>
      </Twemoji>
    </MessageStyles>
  )
}
