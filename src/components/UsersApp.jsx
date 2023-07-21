import React, { useState} from "react"
import { UserList } from "./userList"

export const UsersApp = () => {

    const [endPoint, setendPoint] = useState('users')

    const handleFetch = () =>{
        setendPoint('comments')
    }

    
    

  return (
<>
<h1>Lista de usuarios</h1>
<UserList endPoint={endPoint}></UserList>
<button onClick={handleFetch}>Llamar a la API</button>
</>
    )
}
