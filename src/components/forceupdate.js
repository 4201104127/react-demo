import { Component } from "react"

class ForceUpdate extends Component {
    render() {
        return (
            <div>
                <p>Giá trị: {Math.random()}</p>
                <button onClick={() => this.forceUpdate()}>Reload</button>
            </div>
        )
    }
}

export default ForceUpdate