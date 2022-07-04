import React, { useEffect, useState } from 'react'

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

export default function UseEffect() {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        fetch('https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users')
        .then((response) => response.json())
        .then((response) => setListUser(response))
    }, [])
    return (
        <div>
            <p>UseEffect example</p>
            <ShowUser listUser={listUser}></ShowUser>
        </div>
    )
}
