import React, { useEffect,useState } from 'react'

export const  UserList = ({ endPoint }) => {

    const [data, setData] = useState([])

    const fetchdata = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.error(error)

        }

    }

    useEffect(() => {
        fetchdata()
    }, [endPoint])
    return (


        <ul>
            {endPoint == 'users' ?  data.map(item => <li key={item.id}>Name: {item.name} Email: {item.email}</li>) 
                                : data.map(item => <li key={item.id}>Name: {item.name} Email: {item.body}</li>)}
                                </ul>
    )
}
