import React from 'react'
import { useState } from 'react'
import { AgregarTarea } from './components/AgregarTarea'

const Item = ({ nombre, visto }) => {
    return (
        <li >{nombre}
            {visto ? '✅' : '❌'}
        </li>
    )
}




export const ListadoApp = () => {

    const addTask = () => {
        setArreglo([...arreglo, {nombre: 'nuevo', visto: false}])
    }
    let listadoSecciones = [
        { nombre: 'Instalaciones necesarias', visto: true },
        { nombre: "uso de Vite", visto: true },
        { nombre: "variables en JSX", visto: true },
        { nombre: "props", visto: true },
        { nombre: "eventos", visto: true },
        { nombre: "UserState", visto: true },
        { nombre: "Redux", visto: false },
        { nombre: "customHooks", visto: false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    console.log(arreglo)
    return (
        <>
            <h1>Listado de cosas hechas</h1>
            <AgregarTarea></AgregarTarea>
            <ol>
            {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>

        </>
    )
}
