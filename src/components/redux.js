import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddNote } from './../actions'
import AddNote from './NoteRedux/addnote'
import ShowNote from './NoteRedux/shownote'

class Redux extends Component {
    componentDidUpdate() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <AddNote></AddNote>
                    {this.props.note.map((note, index) => {
                        return <ShowNote noteData={note} key={note.id}></ShowNote>
                    })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        note: state.note
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (content) => {
            dispatch(actAddNote(content))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)
