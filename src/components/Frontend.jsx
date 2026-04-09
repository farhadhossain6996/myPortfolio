import React from 'react'
import Container from './Container'

function Frontend() {
  return (
<section className="py-[50px] ">
<Container>
<div className="py-12 space-y-7">
<div className=" flex ml-[40px] justify-center gap-9">
<div className="bg-gray-900 w-3/12  px-4 py-6 text-center shadow rounded-lg cursor-pointer  hover:scale-105 duration-300">
<div className=" text-xl text-white"> Tailwind CSS</div>
<div className=" bg-amber-400 w-full h-2 rounded-full overflow-hidden mt-2">
    <div className="bg-white w-full h-2  origin-left animate-[grow_1.5s_ease-out]" style={{width:"100%"}}></div>
</div>
<div className=" text-white text-right mt-2">
    100%
</div>
</div>
<div className=" bg-gray-900 w-3/12  px-4 py-6 text-center shadow rounded-lg cursor-pointer  hover:scale-105 duration-300">
<div className=" text-xl text-white"> HTML/CSS</div>
<div className=" bg-amber-400 w-full h-2 rounded-full overflow-hidden mt-2">
    <div className="bg-white w-full h-2  origin-left animate-[grow_1.5s_ease-out]" style={{width:"100%"}}></div>
</div>
<div className=" text-white text-right mt-2">
    100%
</div>
</div>
<div className="bg-gray-900 w-3/12  px-4 py-6 text-center shadow rounded-lg cursor-pointer  hover:scale-105 duration-300">
<div className=" text-xl text-white"> JavaScript</div>
<div className=" bg-amber-400 w-full h-2 rounded-full overflow-hidden mt-2">
    <div className="bg-white w-full h-2  origin-left animate-[grow_1.5s_ease-out]" style={{width:"100%"}}></div>
</div>
<div className=" text-white text-right mt-2">
    100%
</div>
</div>


</div>
<div className=" flex ml-[40px] justify-center gap-9 ">
<div className="bg-gray-900 w-3/12  px-4 py-6 text-center shadow rounded-lg cursor-pointer  hover:scale-105 duration-300">
<div className=" text-xl text-white">React</div>
<div className=" bg-amber-400 w-full h-2 rounded-full overflow-hidden mt-2">
    <div className="bg-white w-full h-2  origin-left animate-[grow_1.5s_ease-out]" style={{width:"100%"}}></div>
</div>
<div className=" text-white text-right mt-2">
    100%
</div>
</div>
<div className="bg-gray-900 w-3/12  px-4 py-6 text-center shadow rounded-lg cursor-pointer  hover:scale-105 duration-300">
<div className=" text-xl text-white"> Next.js</div>
<div className=" bg-amber-400 w-full h-2 rounded-full overflow-hidden mt-2">
    <div className="bg-white w-full h-2  origin-left animate-[grow_1.5s_ease-out]" style={{width:"100%"}}></div>
</div>
<div className=" text-white text-right mt-2">
    100%
</div>
</div>
<div className="bg-gray-900 w-3/12  px-4 py-6 text-center shadow rounded-lg cursor-pointer  hover:scale-105 duration-300">
<div className=" text-xl text-white"> Bootstrap</div>
<div className=" bg-amber-400 w-full h-2 rounded-full overflow-hidden mt-2">
    <div className="bg-white w-full h-2  origin-left animate-[grow_1.5s_ease-out]" style={{width:"100%"}}></div>
</div>
<div className=" text-white text-right mt-2">
    100%
</div>
</div>


</div>




</div>



</Container>


</section>
  )
}

export default Frontend
