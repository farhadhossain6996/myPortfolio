
import React from 'react'
import Container from '../Container'
import { FaFacebook,FaLinkedin, FaInstagram,FaGithub } from "react-icons/fa";

function Footer() {
  return (
   <section className="pb-5  ">
<Container>
<div className="flex flex-wrap-reverse lg:flex-row  justify-between mt-7 lg:gap-y-0 gap-y-6 ">
<div className="text-gray-700">
  <h5>©2025 Farhad Hossain All rights reserved.</h5>
</div>
<div className="flex gap-4 text-xl text-gray-700 ">
<a href="https://www.facebook.com/ " target='_blank' className='hover:text-blue-600'><FaFacebook  /></a>
<a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600'><FaLinkedin /></a>
<a href="https://www.instagram.com/?hl=en/" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600'><FaInstagram /></a>
<a href="https://github.com/farhadhossain6996" target="_blank" rel="noopener noreferrer" className='hover:text-black'><FaGithub /></a>





</div>
<div className="text-gray-700">
  <h5>PrivacyTerms of Services</h5>
</div>
</div>

</Container>

   </section>
  )
}

export default Footer


