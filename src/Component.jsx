import {useState} from 'react';
import React from 'react'

export default function Component() {

      const[text, setText] = useState()
      const[updated, setUpdated] = useState()

      const textOnChange = (event) => {
            setText(event.target.value)
      }

      const buttonOnClick = (event) => {
            setUpdated(text)
      }

      return (
      <div>
            <input type="text" value={text} onChange={textOnChange} />
            <button onClick={buttonOnClick}>Actualitza</button>
            <p>Text input: {text}</p>
            <p>Text actualitzat: {updated}</p>
      </div>
      )
}
