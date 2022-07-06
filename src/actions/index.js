import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const"

export const actAddNote = (content) => {
    return {
        type: ADD_NEW_NOTE,
        content
    }
}

export const actRemoveNote = (content) => {
    return {
        type: REMOVE_NOTE,
        content
    }
}

export const actEditNote = (content) => {
    return {
        type: EDIT_NOTE,
        content
    }
}