import React, { Component } from 'react'

export default class Ref extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
    handleClick = () => {
        this.myRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}></input>
                <button onClick={this.handleClick}>Focus</button>
            </div>
        )
    }
}
