import React from 'react'

function Button({btnText,className}) {
  return (
  <div className={`font-medium  px-5 py-2 rounded-2xl ${className} `}>
    {btnText}
  </div>
  )
}

export default Button
