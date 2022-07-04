import React, { Component } from 'react'

const MessageContext = React.createContext()

class ComponentChild extends Component {
    render () {
        return <div>{this.context}</div>
    }
}

ComponentChild.contextType = MessageContext

export default class Context extends Component {
  render() {
    return (
      <MessageContext.Provider value="Text from father">
        <ComponentChild></ComponentChild>
      </MessageContext.Provider>
    )
  }
}
