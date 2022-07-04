import React, { Component } from 'react'
import { USDtoVND } from './USDtoVND'
import { VNDtoUSD } from './VNDtoUSD'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usd: 0,
            vnd: 0
        }
    }
    handleChange = (data) => {
        this.setState(data)
    }
    render() {
        return (
            <div>
                <USDtoVND onHandleChange={this.handleChange} value={this.state.usd}></USDtoVND>
                <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd}></VNDtoUSD>
            </div>
        )
    }
}
