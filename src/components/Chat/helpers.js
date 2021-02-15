import { reduce as _reduce } from 'lodash'

export const actions = {
  ADD: 'ADD'
}

export function messagesReducer (state, action) {
  switch (action.type) {
    case actions.ADD:
      return [...state, action.payload]
    default:
      return state
  }
}

export function getTypingText (typers, currentUser) {
  const peopleTyping = _reduce(typers, (result, value, key) => {
    if (key === currentUser) return result
    if (value) return [...result, key]
    return result
  }, [])
  if (peopleTyping.length === 0) return ''
  else if (peopleTyping.length === 1) return `${peopleTyping[0]} is typing...`
  else return 'People are typing...'
}
