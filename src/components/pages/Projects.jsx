
import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import Product from '../product'
import xileaner from '/src/assets/xileaner.png'
import { FaExternalLinkAlt,FaGithub,FaArrowRight  } from "react-icons/fa";


function Projects() {
  return (
  <section className="py-30">

<Container>
<div className="px-25">
  <Heading as="h3" className=" text-[44px] text-center  font-bold " >Featured <span className="text-[#00bbff]"> Projects</span> </Heading>

<Heading as="h3" className=" text-gray-700  text-center text-xl  leading-relaxed max-w-3xl mx-auto mt-10  " text="Take a look at some of my latest projects, each built with careful attention to detail and a passion for creating seamless user experiences."/>
{/* ............................. */}
<div className="flex mt-8">
  <Product 
  productImg={xileaner}
buttonText={"Tailwind css"}


livLnk={"https://farhadhossain6996.github.io/Xilancer/"}
GithubLnk={"https://github.com/farhadhossain6996/Xilancer"}
/>


</div>
<div className=" m-auto  bg-[#00bbff] items-center  w-2/12 text-white rounded-full hover:scale-105 duration-300">

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
