import React, { Component } from 'react'

const NumberContext = React.createContext()

class UpdateNumber extends Component {
    render() {
        return (
             <button onClick={() => this.context.update()}>Update Number</button>
        );
    }
}

UpdateNumber.contextType = NumberContext

class ShowNumber extends Component {
    render() {
        return (
            <p>{this.context.number}</p>
        )
    }
}

ShowNumber.contextType = NumberContext

export default class ContextExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    updateNumber = () => {
        this.setState({
            number: Math.random()
        })
    }
    render() {
        return (
            <NumberContext.Provider value={{
                number: this.state.number,
                update: this.updateNumber
            }}>
                <NumberContext.Consumer>{() => (
                    <>
                        <ShowNumber></ShowNumber>
                        <UpdateNumber></UpdateNumber>
                    </>
                )}</NumberContext.Consumer>
            </NumberContext.Provider>
        )
    }
}
