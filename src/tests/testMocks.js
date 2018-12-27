export const mockErrorMessage = 'Error: Bad API Key.'
export const mockTag = 'Work'
export const mockText = 'This is my note.'
export const mockNote = {
  tag: mockTag,
  text: mockText
}
export const mockDefaultState = {
  isLoading: false,
  caughtError: '',
  notes: []
}
export const mockFullState = {
  isLoading: true,
  caughtError: mockErrorMessage,
  notes: [mockNote]
}
