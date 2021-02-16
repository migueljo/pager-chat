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

/**
 * Return "who is typing" string base on how many people are typing
 * @param {Object} typers { miguel: true, carolina: false }
 * @param {String} currentUser
 * @returns String
 */
export function getTypingText (typers, currentUser) {
  /**
   * Transform a object like this { miguel: true, carolina: false } to ["carolina"]
   */
  const peopleTyping = _reduce(typers, (result, value, key) => {
    // remove current session user so we don't show "miguel is typing" to miguel himself
    if (key === currentUser) return result
    if (value) return [...result, key]
    return result
  }, [])

  if (peopleTyping.length === 0) return ''
  else if (peopleTyping.length === 1) return `${peopleTyping[0]} is typing...`
  else return 'People are typing...'
}

/**
 * Scroll down container elm if user was at the end of it
 * @param {HTMLElement} elm
 */
export function shouldScrollDown (elm) {
  const {
    scrollTop,
    scrollHeight,
    offsetHeight
  } = elm.current
  const wasAtTheBottom = scrollHeight - scrollTop === offsetHeight

  if (wasAtTheBottom) {
    setTimeout(() => {
      elm.current.scrollTop = elm.current.scrollHeight - elm.current.offsetHeight
    }, 500)
  }
}
