const initialState = {
  id: '',
  imageurl: '',
  title: '',
  description: '',
  size: '',
  price: '',
  clearEdit: ''
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'EDIT_ID':
      return { ...tempState, id: action.payload }
    case 'EDIT_IMAGE':
      return { ...tempState, imageurl: action.payload }
    case 'EDIT_TITLE':
      return { ...tempState, title: action.payload }
    case 'EDIT_DESCRIPTION':
      return { ...tempState, description: action.payload }
    case 'EDIT_SIZE':
      return { ...tempState, size: action.payload }
    case 'EDIT_PRICE':
      return { ...tempState, price: action.payload }
    case 'CLEAR_EDIT':
      return { ...tempState, clearEdit: action.payload }
    case 'SET_EDIT_CARD':
      return { ...tempState, ...action.payload }
  }
  return tempState
}
