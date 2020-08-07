import styled from 'styled-components'
import VerifiedIcon from '../assets/verified'

const Header = styled.div`

`
const User = styled.span`
  text-align: initial;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.375rem;
  margin-right: .25rem;
  color: ${p => p.color}
`

const Date = styled.span`
  margin-left: .25rem;
  font-size: 0.70rem;
  line-height: 1.375rem;
  vertical-align: middle;
  font-weight: 500;
  color: ${p => p.theme.palette.textMuted};
`

const BotBadge = styled.span`
  background: ${p => p.theme.palette.blurple};
  height: .9375rem;
  padding: 0px .275rem;
  border-radius: .1875rem;
  line-height: .9375rem;
  font-weight: 500;
  font-size: .625rem;
  text-transform: uppercase;
  vertical-align: top;
  position: relative;
  top: 2px;
  color: white;
  display: inline-flex
`

const BotBadgeText = styled.span`
  line-height: 1.0375rem;
`

function MessageHeader(props) {
  return <Header>
    <User {...props}>{props.user}</User>
    {
      props.bot && <BotBadge>
        {
          props.verified && <VerifiedIcon/>
        }
        <BotBadgeText>Bot</BotBadgeText>
      </BotBadge>
    }
    <Date>{props.date}</Date>
  </Header>
}

MessageHeader.defaultProps = {
  user: 'Clyde',
  color: '#3498db',
  bot: false,
  verified: false,
  date: 'Never at nowhere'
}

export default MessageHeader
