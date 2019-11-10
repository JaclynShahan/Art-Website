const initialState = {
    id: "",
    title: "",
    description: "",
    size: "",
    price: "",
    imageUrl: ""
}

export default function reducer(state = initialState, action) {
    let tempState = state

    switch(action.type) {
       case "CART_ID" :
        return {...tempState, id: action.payload}
        case "CART_TITLE" :
        return {...tempState, title: action.payload}
        case "CART_DESCRIPTION" :
        return {...tempState, description: action.payload}
        case "CART_SIZE" :
        return {...tempState, size: action.payload}
        case "CART_PRICE" :
        return {...tempState, price: action.payload}
        case "CART_IMAGE" :
        return {...tempState, imageUrl: action.payload}
    }
    return tempState;
} 