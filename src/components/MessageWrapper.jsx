import styled from 'styled-components'

const MessageWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.background};
  color: ${(props) => props.theme.palette.text};
  font-family: ${(props) => props.theme.typography.text};
`

export default MessageWrapper
