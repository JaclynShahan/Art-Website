const initialState = {
    id: "",
    title: "",
    description: "",
    size: "",
    price: "",
    imageUrl: "",
    searchArtList: [],
    artList: [],
    editModal: false

}

export default function reducer (state = initialState, action) {
    let tempState = state

    switch (action.type) {
        case "TITLE" :
        return {...tempState, title: action.payload}
        case "DESCRIPTION" :
        return {...tempState, description: action.payload}
        case "SIZE" :
        return {...tempState, size: action.payload}
        case "PRICE" :
        return {...tempState, price: action.payload}
        case "IMAGE_URL" :
        return {...tempState, imageUrl: action.payload}
        case "SEARCH_LIST" :
        return {...tempState, searchArtList: action.payload}
        case "ART_LIST" :
        return {...tempState, artList: action.payload}
        case "EDIT_MODAL" :
        return {...tempState, editModal: action.payload}
    }
    return tempState
}