export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const caughtError = (state = '', action) => {
  switch(action.type) {
    case 'CAUGHT_ERROR':
      return action.errorMessage
    default:
      return state
  }
}

export const addNotes = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NOTES':
      return [...state, {tag: action.tag, text: action.text}]
    default:
      return state
  }
}