import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Image from "./Image";
import BannerImg from "/src/assets/protfrolo_Img.png";


function Banner() {
  return (
    <>  
    <section className="py-70 ">
  <Container >
<div className="px-25">
  <div className="flex items-center justify-between gap-x-4 ">

<div className=" w-[70%]">
  <Heading as="h1" className="text-black text-[48px]  text-center  font-bold pb-3"> Hi, I’m <span className="text-primary">Farhad</span> Hossain </Heading>
<Heading as="p" className="  text-black font-bold text-[20px] my-3    " text="I am a Frontend Engineer focused on creating fast, accessible, and elegant user interfaces. Leveraging React, I transform design concepts into seamless user experiences, always balancing cutting-edge creativity with optimal application performance"/>
</div>

<div className="">
  
  { <Image  ImgSrc={BannerImg} ImgAlt={"Farhad profile"} className="hover:scale-105 duration-300"/>}
</div>

</div>
</div>



</Container>
        </section>
        
        
      
    </>
  );
}

export default Banner;


// w-[650px] h-[350px]

// w-[850px]