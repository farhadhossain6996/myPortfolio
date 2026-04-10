import React from 'react'
import Heading from '../Heading'
import Container from '../Container'
import Button from '../Button'


function Skills() {
  return (

<section className=" lg:py-30 py-15">
<Container>
<div className="lg:px-25">
  <Heading as="h3" className=" text-[44px] text-center  font-bold  ">My <span className= "text-primary">Skills</span></Heading>
<div className="flex justify-center items-center gap-x-5 cursor-pointer mt-10">
 <Button  className="  font-light  text-gray-700 hover:scale-105 duration-300 hover:bg-primary  hover:text-white" btnText="All"/>
 <Button  className="  font-light  text-gray-700 hover:scale-105 duration-300 hover:bg-[#00bbff]  hover:text-white" btnText="Frontend"/>
 <Button  className="  font-light  text-gray-700 hover:scale-105 duration-300 hover:bg-primary  hover:text-white" btnText="Backend"/>
 <Button  className="  font-light  text-gray-700 hover:scale-105 duration-300 hover:bg-primary  hover:text-white" btnText="Tools"/>
</div>

<div className="py-12 space-y-6">
  <div className="flex flex-col lg:flex-row items-center justify-between  lg:gap-x-6 gap-y-6">
 <div className="lg:w-[33%] w-full">
   <div className=" px-5 py-6 shadow-md rounded-lg text-center   text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text="Tailwind CSS"/>
  <div className="w-full  h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"65%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white">65%</div>
  </div>
 </div>
  <div className="lg:w-[33%] w-full">
    <div className=" px-5 py-6 shadow-md rounded-lg text-center    text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text=" Bootstrap"/>
  <div className="w-full  h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"60%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white">60%</div>
  </div>
  </div>
 <div className="lg:w-[33%] w-full">
   <div className=" px-5 py-6 shadow-md rounded-lg text-center    text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text="HTML/CSS"/>
  <div className="w-full bg-white h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"70%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white ">70%</div>
  </div>
 </div>
</div>
 
 
   <div className="flex flex-col lg:flex-row items-center justify-between  lg:gap-x-6 gap-y-6">
 <div className="lg:w-[33%] w-full">
   <div className=" px-5 py-6 shadow-md rounded-lg text-center   text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text="JavaScript"/>
  <div className="w-full  h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"30%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white">30%</div>
  </div>
 </div>
  <div className="lg:w-[33%] w-full">
    <div className=" px-5 py-6 shadow-md rounded-lg text-center    text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text=" React"/>
  <div className="w-full  h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"60%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white">60%</div>
  </div>
  </div>
 <div className="lg:w-[33%] w-full">
   <div className=" px-5 py-6 shadow-md rounded-lg text-center    text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text=" Git/GitHub"/>
  <div className="w-full bg-white h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"60%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white ">70%</div>
  </div>
 </div>
</div>
 
   <div className="flex flex-col lg:flex-row  items-center justify-between  lg:gap-x-6 gap-y-6">
 <div className="lg:w-[33%] w-full">
   <div className=" px-5 py-6 shadow-md rounded-lg text-center   text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text="Next.js"/>
  <div className="w-full  h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"35%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white">65%</div>
  </div>
 </div>
  <div className="lg:w-[33%] w-full">
    <div className=" px-5 py-6 shadow-md rounded-lg text-center    text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text=" Varcel"/>
  <div className="w-full  h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"30%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white">60%</div>
  </div>
  </div>
 <div className="lg:w-[33%] w-full">
   <div className=" px-5 py-6 shadow-md rounded-lg text-center    text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text=" Figma"/>
  <div className="w-full bg-white h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"60%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white ">70%</div>
  </div>
 </div>
</div>
  <div className="flex flex-col lg:flex-row items-center justify-between  lg:gap-x-6 gap-y-6">
 <div className="lg:w-[33%] w-full">
   <div className=" px-5 py-6 shadow-md rounded-lg text-center   text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text="VS Code"/>
  <div className="w-full  h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"80%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white">65%</div>
  </div>
 </div>
  <div className="lg:w-[33%] w-full">
    <div className=" px-5 py-6 shadow-md rounded-lg text-center    text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text=" Photoshop"/>
  <div className="w-full  h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"50%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white">60%</div>
  </div>
  </div>
 <div className="lg:w-[33%] w-full">
   <div className=" px-5 py-6 shadow-md rounded-lg text-center    text-black bg-white  hover:scale-105 duration-300 ">
<Heading as="h4" className=" text-black text-[20px]" text="Adobe Illustrator"/>
  <div className="w-full bg-white h-2 rounded-full overflow-hidden mt-5">
  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{width:"80%"}}></div>
 </div>
 <div className=" text-right mt-2 text-white ">70%</div>
  </div>
 </div>
</div>
</div>
</div>


</Container>

</section>

  )
}

export default Skills








// JavaScript
// 30%
// React
// 60%
// Git/GitHub
// 60%
// Next.js
// 30%
// Varcel
// 30%
// Figma
// 60%
// VS Code
// 80%
// Photoshop
// 40%
// Adobe Illustrator
// 80%
// Upcoming
// 100%
// Upcoming
// 100%
// Upcoming