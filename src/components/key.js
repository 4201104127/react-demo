import { Component } from "react";

class Key extends Component {
    render() {
        const myList = [
            {
                id: 'p',
                name: 'php'
            },
            {
                id: 'j',
                name: 'java'
            }
        ]
        const listItems = myList.map(item => <li key={item.id}>{item.name}</li>)
        return (
            <ul>{listItems}</ul>
        )
    }
}

export default Key