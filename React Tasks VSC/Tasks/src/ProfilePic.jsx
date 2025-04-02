import React from 'react'

export default function ProfilePic(props) {
    const users = [
        {id:1,profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCixyM2urliFC1w0DyNMJpBRMOXFizr3FR8aRIFfcDUGBzEaXcV6mt4gVWRqGAqqu4PI&usqp=CAU"},
        {id:2,profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-Bx4bcOTMKU5bQLVsa5gLWVLWK6blo_r06U9C-ZeJCGkQAwQJ2R1knRcfKrJSO5zpQc&usqp=CAU"}

    ]
    const user = users.find(u => u.id === props.userid)
  return (
    <>
        {user ?(
            <div>
                <h1>UserId: {props.userid}</h1>
                <img src={user.profile}></img>
            </div>
        ):
        (<p>No user Found</p>)}
    </>
  )
}
