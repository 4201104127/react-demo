import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    submitForm(e) {
        e.preventDefault()
        const validation = this.validateForm()
        if (validation.error) {
            alert(validation.msg)
        } else {
            alert('Success')
        }
    }
    changeInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    validateForm() {
        let returnData = {
            error: false,
            msg: ''
        }
        const re = /\S+@\S+\.\S+/
        if (!re.test(this.state.email)) {
            returnData = {
                error: true,
                msg: "invalid email"
            }
        }
        if(this.state.password.length < 8) {
            returnData = {
              error: true,
              msg: 'invalid password'
            }
          }
          return returnData
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.submitForm(e)}>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={e => this.changeInputValue(e)}></input>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={e => this.changeInputValue(e)}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form