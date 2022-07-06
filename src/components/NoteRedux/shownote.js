import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actEditNote, actRemoveNote } from '../../actions'

function ShowNote(props) {
    const [noteContent, setNoteContent] = useState(props.noteData.content)
    const noteId = props.noteData.id
    const handleChange = (e) => {
        setNoteContent(e.target.value)
        props.editNote(noteId, e.target.value)
    }
    const handleRemove = () => {
        props.removeNote(noteId)
    }
    return (
        <div>
            <textarea value={noteContent} onChange={handleChange}></textarea>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editNote: (id, content) => {
            dispatch(actEditNote(id, content))
        },
        removeNote: id => {
            dispatch(actRemoveNote(id))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        note: state.note
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowNote)