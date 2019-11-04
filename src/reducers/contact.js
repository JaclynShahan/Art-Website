const initialState = {
    name: "",
    email: "",
    message: "",
    showContactModal: false
}

export default function reducer(state = initialState, action) {
    let tempState = state

    switch(action.type) {
        case "CONTACT_NAME" :
        return {...tempState, name: action.payload}
        case "CONTACT_EMAIL" :
        return {...tempState, email: action.payload}
        case "CONTACT_MESSAGE" :
        return {...tempState, message: action.payload}
        case "CONTACT_MODAL" :
        return {...tempState, showContactModal: action.payload}

    }
    return tempState
}