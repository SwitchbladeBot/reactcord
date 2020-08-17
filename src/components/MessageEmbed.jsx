import React from 'react'
import styled from 'styled-components'
import FieldsWrapper from './FieldsWrapper'

const Embed = styled.div`
  max-wdth: 520px;
  border-radius: 4px;
  background: ${p => p.theme.palette.embed.background};
  border-left: 4px solid ${p => p.theme.palette.embed.color};
  padding: .5rem 1rem 1rem .75rem;
  line-height: 1.375rem;
`

const EmbedWrapper = styled.div`
  display: flex;
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
`

const FooterWrapper = styled.div`
  margin-top: 8px;
  display: flex;
`

const FooterText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
`

const FooterIcon = styled.img`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  -o-object-fit: contain;
  object-fit: contain;
  border-radius: 50%;
`

const Media = styled.img`
  max-width: 520px;
  border-radius: 4px;
  margin-top: 16px;
`

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 16px;
  margin-top: 8px;
  border-radius: 4px;
`

function MessageEmbed(props) {
  return <Embed style={{
    borderColor: props.color
  }}>
    <EmbedWrapper>
      <div>
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
        {
          props.fields && props.fields.length && <FieldsWrapper fields={props.fields} />
        }
      </div>
      {
        props.thumbnail && <Thumbnail src={props.thumbnail} />
      }
    </EmbedWrapper>

    {
      props.image && <Media src={props.image} />
    }
    {
      props.footer && props.footer.text && <FooterWrapper>
        {
          props.footer.icon && <FooterIcon src={props.footer.icon} />
        }
        <FooterText>{props.footer.text}</FooterText>
      </FooterWrapper>
    }
  </Embed>
}

export default MessageEmbed
