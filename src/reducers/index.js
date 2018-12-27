import { combineReducers } from 'redux'
import { isLoading, caughtError, addNotes } from './notesReducer'

const rootReducer = combineReducers({
  isLoading,
  caughtError,
  notes: addNotes
})

export default rootReducer;
