

function Container({children,className}) {
  return (
    <div className={` max-w-[1320px] mx-auto lg:px-0 px-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container
