import React from 'react'
import styled from 'styled-components'

const Embed = styled.div`
  max-wdth: 520px;
  border-radius: 4px;
  background: ${p => p.theme.palette.embed.background};
  border-left: 4px solid ${p => p.theme.palette.embed.color};
  padding: .5rem 1rem 1rem .75rem;
  line-height: 1.375rem;
`

const EmbedTitle = styled.span`
  display: block;
  font-weight: 600;
  margin-top: 8px;
  color: ${({ theme }) => theme.palette.embed.header}
`

const EmbedContent = styled.div`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  margin-top: 8px;
`

const EmbedAuthorWrapper = styled.div`
  display: flex;
  margin-top: 8px;
`

const EmbedAuthor = styled.div`
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.embed.header}
`

const AuthorIcon = styled.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 50%;
}
`

function MessageEmbed(props) {
  return <Embed style={{
    borderColor: props.color
  }}>
    {
      props.author && props.author.name && <EmbedAuthorWrapper>
        {
          props.author.icon && <AuthorIcon src={props.author.icon} />
        }
        <EmbedAuthor>{props.author.name}</EmbedAuthor>
      </EmbedAuthorWrapper>
    }
    {
      props.title && <EmbedTitle>{props.title}</EmbedTitle>
    }
    <EmbedContent>
      {props.children}
    </EmbedContent>
  </Embed>
}

export default MessageEmbed
