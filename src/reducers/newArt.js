const initialState = {
    title: "",
    description: "",
    size: "",
    price: "",
    imageUrl: "",
    artList: [],
    setShowModal: false
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
        case "SHOW_NEW_MODAL" :
        return {...tempState, setShowModal: action.payload}
        case "ART_LIST" :
        return {...tempState, artList: action.payload}
        case "NEW_IMAGE" :
        return {...tempState, imageUrl: action.payload}
    }
    return tempState
}