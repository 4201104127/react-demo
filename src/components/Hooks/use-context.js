import React, { Component, useContext } from 'react'

const CounterContext = React.createContext()
const Counter = () => {
    const counter = useContext(CounterContext)
    return (
        <div>
            <p>{counter.count}</p>
            <button onClick={() => {
                counter.countUp()
            }}>
                Up
            </button>
            <button onClick={() => {
                counter.countDown()
            }}>
                Down
            </button>
        </div>
    )
}

export default class UseContext extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    countUp() {
        this.setState({
            count: this.state.count + 1
        })
    }
    countDown() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <CounterContext.Provider value={{
                count: this.state.count,
                countUp: this.countUp.bind(this),
                countDown: this.countDown.bind(this)
            }}>
                <Counter></Counter>
            </CounterContext.Provider>
        )
    }
}
