import React, { useState } from 'react'

const ShowUser = (props) => {
    const { listUser } = props
    return (
        <>
            {listUser.map((user) => {
                return (
                    <React.Fragment key={user.id}>
                        <ul>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                        </ul>
                        <hr></hr>
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default function UseState() {
    const [listUser, setListUser] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getUser = () => {
        setLoading(true)
        fetch("https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users")
        .then((response) => response.json())
        .then((response) => {
            setListUser(response)
            setLoading(false)
        }, (err) => setLoading(false) )
    }
    return (
        <div>
            <p>UseState example</p>
            {isLoading ? "Loading..." : <button onClick={getUser}>Get User</button>}
            <ShowUser listUser={listUser}></ShowUser>
        </div>
    )
}
