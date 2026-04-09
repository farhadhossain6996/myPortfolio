import React from 'react'

function Image({className,ImgSrc,ImgAlt}) {
  return (
   <>
   <img  className={`${className}`} src={ImgSrc} alt={ImgAlt} />
   
   </>
  )
}

export default Image
