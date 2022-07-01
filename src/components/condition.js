import { Component } from "react";

class Noti extends Component {
    render() {
        if (this.props.isShow) {
            return (
                <ul>
                    <li>Success</li>
                </ul>
            )
        } else {
            return null
        }
    }
}

const Notification = (props) => {
    if (props.isShow) {
        return (
            <ul>
                <li>Success</li>
            </ul>
        )
    } else {
        return null
    }
}

class Condition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowNotification: false
        }
    }
    setNotification() {
        this.setState({
            isShowNotification: !this.state.isShowNotification
        })
    }
    render() {
        const {isShowNotification} = this.state
        return (
            <div>
                <button onClick={() => this.setNotification()}>{isShowNotification ? 'Show' : 'Hide'}</button>
                <Notification isShow={isShowNotification} />
                <Noti isShow={isShowNotification} />
            </div>
        )
    }
}

export default Condition