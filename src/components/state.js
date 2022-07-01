import { Component } from "react";

class State extends Component {
    constructor(props) {
        super(props)
        this.state = {index: 1}
    }
    countDown() {
        this.setState({
            index: this.state.index - 1
        })
    }
    countUp() {
        this.setState((prev, props) => {
            return {
                index: this.state.index + 1
            }
        })
    }
    render() {
        return (
            <div>
                <p>Giá trị {this.state.index}</p>
                <button onClick={() => this.countUp()}>Tăng</button>
                <button onClick={() => this.countDown()}>Giảm</button>
            </div>
        )
    }
}

export default State