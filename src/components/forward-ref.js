import React from 'react'

// child
const MyInput = React.forwardRef((props, ref) => {
    return (<input name={props.name} ref={ref}></input>)
})

// father
export const ForwardRef = () => {
    let ref = React.createRef()
    const handleClick = () => {
        ref.current.focus()
    }
    return (
        <><MyInput name="email" ref={ref}></MyInput><button onClick={handleClick}>Click</button></>
    )
}

