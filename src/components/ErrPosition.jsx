import './styles/ErrPosition.css'

const ErrPosition = ({errPosition}) => {
  return (
    <div className='err__card'>
        <h2 className='err__tittle'>No se pudo mostrar la página 😔</h2>
        <p className='err__p  text'>Para poder ver la página ver debes permitir la ubicación</p>
        <p className='err__p'>
            <span className='err__label'>CÓDIGO DE ERROR{errPosition.code}: </span><span className='err__value'>{errPosition.message}</span>
        </p>
    </div>
  )
}

export default ErrPosition