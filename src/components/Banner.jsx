import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Image from "./Image";
import BannerImg from "/src/assets/protfrolo_Img.png";


function Banner() {
  return (
    <>  
    <section className="lg:py-70 pt-30 ">
  <Container >
<div className="lg:px-25">
  <div className="flex items-center flex-col-reverse lg:flex-row  justify-between gap-x-4 ">

<div className=" lg:w-[70%] w-full">
 <div className="lg:mt-0 mt-6">
   <Heading as="h1" className="text-black lg:text-[48px] md:text-[36px] text-[32px]  text-center  font-bold pb-3"> Hi, I’m <span className="text-primary">Farhad</span> Hossain </Heading>
 </div>
<Heading as="p" className="  text-black font-bold lg:text-[20px] text-[18px] lg:my-3 my-1    " text="I am a Frontend Engineer focused on creating fast, accessible, and elegant user interfaces. Leveraging React, I transform design concepts into seamless user experiences, always balancing cutting-edge creativity with optimal application performance"/>
</div>

<div className="">
  
  { <Image  ImgSrc={BannerImg} ImgAlt={"Farhad profile"} className="hover:scale-105 duration-300 "/>}
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