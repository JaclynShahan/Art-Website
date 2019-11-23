const initialState = {
  cartItem: [],
 
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
   case 'ADD_TO_CART' :
    return {...tempState, cartItem: action.payload}
  }
  return tempState
}
