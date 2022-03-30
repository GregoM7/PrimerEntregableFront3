import React from 'react'

const Choices = (props) => {
  return (
    <div className="recordatorio">
      <h3>Selección anterior: {props.choice.toUpperCase()}</h3>
      <h4>Historial de opciones elegidas: <ul>{props.listChoices.map((letter, index) => <li key={index + letter}>{letter.toUpperCase()}</li>)}</ul></h4>
    </div>
  )
}

export default Choices