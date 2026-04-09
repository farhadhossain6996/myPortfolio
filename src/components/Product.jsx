import React from 'react'
import Button from './Button'
import Image from './Image'
import Flex from './Flex'
import Heading from './Heading'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

function Product({productImg,buttonText,livLnk,GithubLnk}) {
  return (
   <>
  
    <div className="w-[33%] group">
    <div className="     group-hover:scale-102 duration-300 ">
 <div className="h-48 overflow-hidden">
  <Image ImgSrc={productImg} className="group-hover:scale-110 duration-300" />
 </div>
      <div className=" bg-white px-4 py-6 ">
    <Flex className="text-center gap-x-3">

<button className="px-2 py-1 text-[12px] font-semibold text-center text-black border border-gray-500 rounded-full">
  {buttonText}
</button>
 </Flex>

<Heading as="h3" className="font-semibold text-xl leading-relaxed mt-4" text="E-commerce Platform"/>
<Heading as="p" className=" leading-relaxed text-muted-foreground text-sm  text-center mt-2" text="Full-featured e-commerce platform with user authentication."/>

<div className=" flex gap-x-4 mt-7   text-gray-500 ">

<a href={livLnk} target='_blank'><FaExternalLinkAlt className=" text-[20px] hover:text-primary transition duration-300 text-muted-foreground" 
 /></a>
<a href={GithubLnk} target='_blank' ><FaGithub className="text-[20px] hover:text-primary transition duration-300 text-muted-foreground" /></a>
</div>

  </div>
   </div>
  </div>
   
   </>
  )
}

export default Product
