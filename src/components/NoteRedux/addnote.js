import React, { useRef, useState } from 'react'
import { actAddNote } from '../../actions'
import { connect } from 'react-redux'

function AddNote(props) {
    const [content, setContent] = useState('')
    const noteInput = useRef(null)
    const handleAdd = () => {
        props.addNote(content)
        noteInput.current.value = ''
        setContent('')
    }
    return (
        <div>
            <input value={content} onChange={(e) => {setContent(e.target.value)}} ref={noteInput}></input>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (content) => {
            dispatch(actAddNote(content))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNote);