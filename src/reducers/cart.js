const initialState = {
  cartItem: [],
  id: "",
  title: "Cart Item",
  description: "Testing a cart item",
  size: "10 x 10",
  price: "$24.99",
  imageUrl: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjqturw1fflAhUHWa0KHfr0BBMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.in%2FTamatina-Canvas-Paintings-Landscape-Psychedelic%2Fdp%2FB01NCKKMFN&psig=AOvVaw3f9e2-_rHT7FyGMJYj-W19&ust=1574300865895182"
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'CART_ITEM':
      return { ...tempState, cartItem: action.payload }
    case 'CART_ID' :
       return {...tempState, id: action.payload}
    case 'CART_TITLE' :
        return {...tempState, title: action.payload}
    case 'CART_DESCRIPTION' :
        return {...tempState, description: action.payload}
    case 'CART_SIZE' :
        return {...tempState, size: action.payload}
    case 'CART_PRICE' :
        return {...tempState, price: action.payload}
    case 'CART_IMAGE' :
        return {...tempState, imageUrl: action.payload}
  }
  return tempState
}
