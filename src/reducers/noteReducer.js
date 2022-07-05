import { ADD_NEW_NOTE } from "../const";

const noteReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_NOTE:
            const generateID = new Date().getTime()
            state = [...state, {id: generateID, content: action.content}]
            return state
        default:
            return state
    }
}

export default noteReducer