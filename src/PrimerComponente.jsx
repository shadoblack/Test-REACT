import PropTypes from 'prop-types'

export const PrimerComponente = ( {titulo, subtitulo} ) => {


  return (
    <>
    <h1>{titulo} </h1>
    <h2>{subtitulo} </h2>
    
    </>
  )
}

PrimerComponente.PropTypes ={
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
}

PrimerComponente.defaultProps ={
titulo: 'Test de REACT',
subtitulo: 'Sección de Props'
}
