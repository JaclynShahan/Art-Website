const initialState = {
  cartItem: []
  // id: "",
  // title: "",
  // description: "",
  // size: "",
  // price: "",
  // imageUrl: ""
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'CART_ITEM':
      return { ...tempState, cartItem: action.payload }
  }
  return tempState
}
