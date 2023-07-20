import React from 'react'

const Items = ({nombre, visto}) =>{
    return(
        <li>{nombre}
         {visto && '✅' }
         </li>
    )
}

export const ListadoApp = () => {
  return (
    <>
    <h1>Listado de cosas hechas</h1>
    <ol>

        <Items nombre="instalaciones" visto={true}></Items>
        <Items nombre="uso de Vite" visto={true}></Items>
        <Items nombre="variables en JSX" visto={true}></Items>
        <Items nombre="props" visto={true}></Items>
        <Items nombre="eventos" visto={true}></Items>
        <Items nombre="UserState" visto={true}></Items>
        <Items nombre="Redux" visto={false}></Items>
        <Items nombre="customHooks" visto={false}></Items>
    </ol>

    </>
  )
}
