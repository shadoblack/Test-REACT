import React from 'react'
import { useFetchData } from '../hooks/useFetchData'

export const UserList = ({ endPoint }) => {

    const { data, isLoading } = useFetchData(endPoint)
    return (
        <>

            <ul>
                {isLoading ? <p>cargando...</p>
                    : endPoint == 'users'
                        ? data.map(item => <li key={item.id}>Name: {item.name} Email: {item.email}</li>)
                        : data.map(item => <li key={item.id}>Name: {item.name} Email: {item.body}</li>)
                        }
            </ul>
        </>
    )
}
