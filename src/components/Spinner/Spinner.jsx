import React from 'react'
import "./spinner.css"

const Spinner = ({className}) => {
  return (
<div class={`lds-hourglass ${className}`}></div>
  )
}

export default Spinner