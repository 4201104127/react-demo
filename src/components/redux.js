import React, { Component } from 'react'
import { connect } from 'react-redux'
import {actAddNote} from './../actions'

export class redux extends Component {
  render() {
    return (
      <div>redux</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(redux)