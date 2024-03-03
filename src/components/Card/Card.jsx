import React from 'react'
import cls from "./card.module.css"

const Card = ({className,children}) => {
  return (
    <div className={`${cls.card} ${className}`}>{children}</div>
  )
}

export default Card