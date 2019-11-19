const GET_USER = 'GET_USER'

const initialState = {
  username: '',
  pin: '',
  authentication: false,
  userImage: 'https://list.lisimg.com/image/7284180/700full.jpg',
  user: {}
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'SET_USERNAME':
      return { ...tempState, username: action.payload }
    case 'SET_PIN':
      return { ...tempState, pin: action.payload }
    case 'USER_AUTH':
      return { ...tempState, authentication: action.payload }
    case 'USER_IMAGE':
      return { ...tempState, userImage: action.payload }
    case GET_USER + '_PENDING':
      return Object.assign({}, state, { isLoading: true })
    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {
        user: action.payload,
        isLoading: false
      })
  }
  return tempState
}
