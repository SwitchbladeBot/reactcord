import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Field = styled.div`
  margin-top: 8px;
`;

const FieldTitle = styled.span`
  font-weight: 600;
  margin-bottom: 2px;
  font-size: 0.875rem;
  line-height: 1.125rem;
  min-width: 0;
  display: block;
  color: ${({ theme }) => theme.palette.embed.header}
`

const FieldValue = styled.span`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  white-space: pre-line;
  min-width: 0;
`

function FieldsWrapper(props) {
  return <Wrapper>
    {
      props.fields.map(field => <Field style={field.inline ? {
        flex: 1,
        minWidth: 150,
        flexBasis: 'auto'
      } : {
        flex: 0,
        minWidth: '100%',
        maxWidth: 506
      }}>
        <FieldTitle>{field.name}</FieldTitle>
        <FieldValue>{field.value}</FieldValue>
      </Field>)
    }
  </Wrapper>
}

export default FieldsWrapper
