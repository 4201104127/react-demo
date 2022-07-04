import React, { Component } from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    decrement() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    render() {
        return <div>{
            this.props.render({
                count: this.state.count,
                increment: this.increment,
                decrement: this.decrement
            })
        }</div>;
    }
}

export default class RenderProps extends Component {
    render() {
        return (
            <Counter
                render={(data) => {
                    const { count, increment, decrement } = data;
                    return (
                        <>
                            <p>Giá trị {count}</p>
                            <button onClick={increment}>Tăng</button>
                            <button onClick={decrement}>Giảm</button>
                        </>
                    );
                }}
            />
        );
    }
}
