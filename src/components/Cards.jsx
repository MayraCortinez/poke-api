import React from 'react'
import '../App.css';

const Cards = () => {
  return (
    <div className='container-item'>
      <h2 className='pokemon-name'> Nombre: </h2>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="avatar" />
      <div className="container-flex">
        <div className="container-details">
            <p>Altura: </p>
            <p>Peso: </p>
            <p>Speed: </p>
            <p>Tipo: </p>
            <p>Id: </p>
        </div>
        <div className="container-details">
            <p>Defense: </p>
            <p>Attack: </p>
        </div>
      </div>
    </div>
  )
}

export default Cards
