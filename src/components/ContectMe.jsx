import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import Container from './Container';
import Flex from './Flex';
import Heading from './Heading';
import Button from "./Button";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
function ContectMe() {
  return (
<section className="lg:py-30 py-15">
<Container>
<div className="lg:px-25">

<Heading as="h3" className=" text-4xl text-center md:text-5xl font-bold mb-10" >
  Contact<span className=" text-primary"> Me</span> 
</Heading>

<div className="flex flex-col lg:flex-row items-center justify-between lg:gap-x-6 gap-y-6 lg:pt-10 pt-5 ">
  
  {/* .............Leaft_Side............. */}

  <div className=" lg:w-[50%] w-full">
<Heading as="h4" className="text-[40px] font-semibold">Let's  <span className="text-primary"> Talk</span> </Heading>
<p className="text-[20px]  font-normal mt-3">I'm open to discussing web development projects or partnership opportunities.</p>

<Flex className="  text-[25px]  gap-x-2 hover:scale-105 duration-300  cursor-pointer mt-3  ">
  <MdOutlineEmail className= "text-primary" />
  <Heading as="h4" className="" text="farhadhossain6996@gmail.com "/>
</Flex>
<Flex className=" text-[25px]    gap-x-2 hover:scale-105 duration-300  cursor-pointer mt-3">
<LuPhoneCall className= "text-[#00bbff]" />
 <Heading as="h4" className="" text="01320869182"/>
</Flex>
<Flex className=" text-[25px]   gap-x-2 hover:scale-105 duration-300  cursor-pointer mt-3">
<LiaMapMarkedAltSolid className= "text-[#00bbff]" />
 <Heading as="h4" className="" text="Tongi,Gazipur_Dhaka"/>
</Flex>


</div>
{/* ...............................Right............... */}
<div className="lg:w-[40%] w-full ">
  <div className="bg-white shadow-md rounded-xl p-8 space-y-6">
<Heading as="h3" className=" text-2xl font-semibold text-center"text="Send a Message"/>
<div className="">
<Heading as="h3" className="text-sm font-medium text-gray-700 mb-1 block text-center "text="Your Name"/>
<input type="text" className="w-full px-4 py-3 bg-[#F8FBF8] border border-gray-200 rounded-lg text-gray-600  focus:outline-none border-input focus:ring-2 focus:ring-[#F8FBF8] shadow-sm " placeholder="Farhad Hossain" />
</div>
<div className="">
  <Heading as="h3"className="text-sm font-medium text-gray-700 mb-1 block text-center" text="Your Email"/>
  <input type="email" className="w-full px-4 py-3 bg-[#F8FBF8] border border-gray-200 rounded-lg text-gray-600 focus:outline-none  border-input focus:ring-2 focus:ring-[#F8FBF8] shadow-sm  " placeholder="farhadhossain6996@gmail.com" />
</div>
<div className="">
  <Heading as="h3" className="text-center text-gray-700 font-medium mb-1 text-sm block " text="Your Message"/>
<textarea name="message" id="message" className="w-full px-4 py-3 bg-[#F8FBF8] border border-gray-200  rounded-lg focus:outline-none border-input focus:ring-2 focus:ring-[#F8FBF8] shadow-sm" placeholder="Hello, I'd like to talk about..."  ></textarea>

</div>
<div className="bg-[#00bbff] flex items-center justify-center  rounded-full text-white hover:scale-105 duration-300">

  <Button as="h5" className="text-center" btnText="Send Message"/>
  <PiPaperPlaneTiltBold lassName="text-xl"/> 

</div>
</div>
</div>

</div>

</div>
</Container>



</section>
  )
}

export default ContectMe
