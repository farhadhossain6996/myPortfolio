
import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import xilancer from '/src/assets/xileaner.png'
import reeni from '/src/assets/reeni.png'
import Orebi from '/src/assets/Orebi.png'
import { FaExternalLinkAlt,FaGithub,FaArrowRight  } from "react-icons/fa";


function Projects() {
  return (
  <section className="lg:py-30 py-15">

<Container>
<div className="lg:px-25">
  <Heading as="h3" className=" text-[44px] text-center  font-bold " >Featured <span className="text-[#00bbff]"> Projects</span> </Heading>

<Heading as="h3" className=" text-gray-700  text-center lg:text-[20px] text-[18px]  leading-relaxed max-w-3xl mx-auto lg:mt-10 mt-6  " text="Take a look at some of my latest projects, each built with careful attention to detail and a passion for creating seamless user experiences."/>
{/* ............................. */}
<div className="flex flex-col lg:flex-row justify-between lg:gap-x-6 gap-y-6  mt-12">
   <div className="lg:w-[33%] w-full  group ">
    <div className=" bg-white h-[450px] group-hover:scale-102 duration-300 ">
 <div className="h-48 overflow-hidden">
  <Image ImgSrc={xilancer} className="group-hover:scale-110 duration-300" />
 </div>
      <div className=" px-4 py-5 ">
    <Flex className="text-center gap-x-3">

<button className="px-2 py-1 text-[12px] font-semibold text-center text-black border border-gray-500 rounded-full">
  Tailwind css
</button>
 </Flex>

<Heading as="h3" className="font-semibold text-xl leading-relaxed mt-4" text="Freelance Marketplace"/>
<Heading as="p" className=" leading-relaxed text-muted-foreground text-sm mt-2" text="A modern freelance marketplace focused on connecting clients with the right talent. Designed with a 'UX-first' approach to provide a smooth and effortless service-browsing experience."/>

<div className=" flex gap-x-4 mt-7   text-gray-500 ">

<a href="https://farhadhossain6996.github.io/Xilancer/" target='_blank'><FaExternalLinkAlt className=" text-[20px] hover:text-primary transition duration-300 text-muted-foreground" 
 /></a>
<a href="https://github.com/farhadhossain6996/Xilancer" target='_blank' ><FaGithub className="text-[20px] hover:text-primary transition duration-300 text-muted-foreground" /></a>
</div>

  </div>
   </div>
  </div>
<div className="lg:w-[33%] w-full  group ">
    <div className=" bg-white h-[450px] group-hover:scale-102 duration-300">
 <div className="h-48 overflow-hidden">
  <Image ImgSrc={reeni} className="group-hover:scale-110 duration-300" />
 </div>
      <div className="px-4 py-5">
    <Flex className="text-center gap-x-3">

<button className="px-2 py-1 text-[12px] font-semibold text-center text-black border border-gray-500 rounded-full">
  React.js
</button>
<button className="px-2 py-1 text-[12px] font-semibold text-center text-black border border-gray-500 rounded-full">
 Tailwind CSS
</button>
<button className="px-2 py-1 text-[12px] font-semibold text-center text-black border border-gray-500 rounded-full">
Framer Motion
</button>
 </Flex>

<Heading as="h3" className="font-semibold text-xl leading-relaxed mt-4" text="Personal Brand Portfolio"/>
<Heading as="p" className=" leading-relaxed text-muted-foreground text-sm mt-2" text="A high-performance personal portfolio featuring dynamic skill visualization and a structured project showcase, built with a focus on modern aesthetics and seamless UX."/>

<div className=" flex gap-x-4 mt-7   text-gray-500 ">

<a href="https://reeniweb2pojecfinal.vercel.app/" target='_blank'><FaExternalLinkAlt className=" text-[20px] hover:text-primary transition duration-300 text-muted-foreground" 
 /></a>
<a href="https://github.com/farhadhossain6996/reeniweb2pojecfinal" target='_blank' ><FaGithub className="text-[20px] hover:text-primary transition duration-300 text-muted-foreground" /></a>
</div>

  </div>
   </div>
  </div>
  <div className="lg:w-[33%] w-full  group ">
    <div className="bg-white h-[450px] group-hover:scale-102 duration-300 ">
 <div className="h-48 overflow-hidden">
  <Image ImgSrc={Orebi} className="group-hover:scale-110 duration-300" />
 </div>
      <div className="px-4 py-5">
    <Flex className="text-center gap-x-3">

<button className="px-2 py-1 text-[12px] font-semibold text-center text-black border border-gray-500 rounded-full">
  React.js
</button>
<button className="px-2 py-1 text-[12px] font-semibold text-center text-black border border-gray-500 rounded-full">
Tailwind CSS
</button>
 </Flex>

<Heading as="h3" className="font-semibold text-xl leading-relaxed mt-4" text="Online Shopping"/>
<Heading as="p" className=" leading-relaxed text-muted-foreground text-sm mt-2" text="A sleek e-commerce frontend built with React and Tailwind CSS, featuring a fully responsive grid layout and optimized UI components"/>

<div className=" flex gap-x-4 mt-7   text-gray-500 ">

<a href="https://orebi-psi-ten.vercel.app/" target='_blank'><FaExternalLinkAlt className=" text-[20px] hover:text-primary transition duration-300 text-muted-foreground" 
 /></a>
<a href="https://github.com/farhadhossain6996/Orebi" target='_blank' ><FaGithub className="text-[20px] hover:text-primary transition duration-300 text-muted-foreground" /></a>
</div>

  </div>
   </div>
  </div>

</div>
<div className=" m-auto  bg-primary items-center w-[190px] text-white rounded-full hover:scale-105 duration-300 mt-8">

<a href="https://github.com/farhadhossain6996" target="_blank" className="flex items-center" >
<Button className="text-center" btnText="Check My Github"/>

<FaArrowRight />
</a>


</div>
</div>

</Container>

  </section>
  )
}

export default Projects


