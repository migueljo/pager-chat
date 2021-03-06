import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './ChatMessageStyles'

/**
 * Using https://ui-avatars.com/ to generate initials from names
 * @param {String} username
 */
function getAvatar ({ username }) {
  return `https://ui-avatars.com/api/?background=EEE&color=000&size=80&name=${username}&font-size=0.33`
}

function ChatMessage ({ data }) {
  // transform a date into a 12:43 pm/am format
  const time = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(new Date(data.time))

  return (
    <Styled.Container>
      <Styled.Avatar src={getAvatar(data)} />
      <Styled.Info>
        <Styled.Header>
          <Styled.Author>{data.username}</Styled.Author>
          <Styled.Time>{time}</Styled.Time>
        </Styled.Header>
        {
          data.type === 'text'
            ? (
            <Styled.Message>
              {data.text}
            </Styled.Message>
              )
            : (
            <Styled.Image src={data.url} alt={data.alt} />
              )
        }
      </Styled.Info>
    </Styled.Container>
  )
}

ChatMessage.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    time: PropTypes.string,
    type: PropTypes.string,
    username: PropTypes.string,
    url: PropTypes.string,
    alt: PropTypes.alt
  }).isRequired
}

export default ChatMessage
