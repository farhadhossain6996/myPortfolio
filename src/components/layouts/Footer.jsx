
import React from 'react'
import Container from '../Container'
import { FaFacebook,FaLinkedin, FaInstagram,FaGithub } from "react-icons/fa";

function Footer() {
  return (
   <section className="p-4 md:p-12 lg:p-20  ">
<Container>
<div className="flex justify-between mt-7 ">
<div className="text-gray-700">
  <h5>©2025 Farhad Hossain All rights reserved.</h5>
</div>
<div className="flex gap-4 text-xl text-gray-700 ">
<a href="https://www.facebook.com/ " target='_blank'><FaFacebook  /></a>
<a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
<a href="https://www.instagram.com/?hl=en/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
<a href="https://github.com/farhadhossain6996" target="_blank" rel="noopener noreferrer"><FaGithub /></a>





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


