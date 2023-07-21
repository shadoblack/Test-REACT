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
        {id : 0, nombre: 'Instalaciones necesarias', visto: true },
        {id : 1, nombre: "uso de Vite", visto: true },
        {id : 2, nombre: "variables en JSX", visto: true },
        {id : 3, nombre: "props", visto: true },
        {id : 4, nombre: "eventos", visto: true },
        {id : 5, nombre: "UserState", visto: true },
        {id : 6, nombre: "Redux", visto: false },
        {id : 7, nombre: "customHooks", visto: false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAgregarTarea = (val) => {
        let valor = val.trim()
        if(valor < 1) return
        const envio = {
            id: arreglo.length ,
            nombre: valor,
            visto: false
        }
        setArreglo([...arreglo,envio])
    }

    return (
        <>
            <h1>Listado de cosas hechas</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
            <ol>
            {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>

        </>
    )
}
