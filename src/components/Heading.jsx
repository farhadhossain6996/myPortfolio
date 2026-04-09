import React from 'react'

function Heading({as:Tag ,className,text,children}) {
  return (
    <>
    <Tag className={className}> {text ||children }</Tag>
    </>
  )
}

export default Heading
