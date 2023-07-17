import './PrimerComponente.css'

const string= 'esto es un texto'
const number = 3748324732
const array = ['test REACT', 'hola', 8, 28374367]
const boolean = true
const funcion = () => 1+1
const objeto = { nombre: 'Edgar', edad: 32 }
const fecha = new Date()



export const PrimerComponente = () => {
  return (
    <>
    <h1>Variables en JSX</h1>
    <h4>variable tipo String:</h4><p>{string}</p>
    <h4>variable tipo Number:</h4><p>{number}</p>
    <h4>variable tipo array:</h4><p>{array}</p>
    <h4>variable tipo boolean:</h4><p>{boolean}</p>
    <h4>variable tipo funcion:</h4><p>{string}</p>
    <h4>variable tipo String:</h4><p>{funcion()}</p>
    </>
  )
}
