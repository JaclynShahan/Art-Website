const initialState = {
    title: "",
    description: "",
    size: "",
    price: "",
    art: [],
    showModal: false
}

export default function reducer (state = initialState, action) {
    let tempState = state

    switch(action.type) {
        case "NEW_TITLE" :
        return {...tempState, title: action.payload}
        case "NEW_DESCRIPTION" :
        return {...tempState, description: action.payload}
        case "NEW_SIZE" :
        return {...tempState, size: action.payload}
        case "NEW_PRICE" :
        return {...tempState, price: action.payload}
    }
    return tempState
}