import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import { FaCode } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";
import { PiPresentationBold } from "react-icons/pi";


function AboutMe() {
  return (
    <section className="py-30">
      <Container>
      <div className="px-25">
          <div className=" text-center">
          <Heading as="h3" className=" text-[44px]  font-bold mb-10">
            About <span className="text-[#00bbff]">Me</span>
          </Heading>
        </div>
        <div className="">
          <Flex className="  flex-row justify-between items-center gap-x-5 ">
            {/* ////////////LeftSide//////// */}
            <div className="w-[50%] ">
              <Heading
                as="h2"
                className="text-[30px]  font-bold  ">
                  Front End Developer with React
              </Heading>
              <Heading
                as="p"
                className="text-gray-700 text-lg leading-relaxed mt-10 "
                text="A passionate front-end developer recently trained at Creative IT (South Asia's top IT institute). I specialize in transforming design concepts into responsive, visually appealing, and high-performance web applications. Eager to apply my hands-on skills in real-world projects and contribute to a dynamic team. I thrive on creating seamless user experiences."
              />
              <Heading
                as="p"
                className="text-gray-700 text-lg leading-relaxed mt-10 "
                text="As an expert web architect, I’m driven to architect, lead, and optimize innovative projects while actively defining the future direction of cutting-edge web technologies.."
              />
              <div className=" flex items-center justify-center gap-x-6 mt-6 ">
                <a href="#ContectMe">
                  <Button
                    className=" bg-primary text-white px-6 py-2  rounded-full  hover:scale-105 duration-300"
                    btnText="Get In Touch"
                  />
                </a>
                <a href="/">
                  <Button
                    className="  px-6 py-2   border-2 text-primary hover:text-amber-50 hover:bg-primary duration-300 transition-colors  hover:scale-105  rounded-full"
                    btnText="Download CV"
                  />
                </a>
              </div>
            </div>

            {/* ...........Rightside...... */}
            <div className=" w-[50%] space-y-5 ">
              <div className="bg-white p-6 rounded-lg text-balck shadow-lg border-r-2 border-primary ursor-pointer hover:scale-105 duration-300 flex  items-center space-x-4">
                <div className=" p-4 rounded-full bg-[#eff7f9] text-primary ">
            <FaCode />


                </div>
                <div className="">
                  <Heading
                    as="h4"
                    className="text-xl font-semibold  "
                    text="Web Development"
                  />
                  <Heading
                    as="p"
                    className="text-gray-400 text-sm mt-2 "
                    text="Creating responsive websites and web applications with modern frameworks"
                  />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg text-balck shadow-lg border-r-2 border-primary ursor-pointer hover:scale-105 duration-300  ">
                <div className=" flex  items-center space-x-4">
                  <div className=" p-4 rounded-full bg-[#eff7f9]  text-primary ">
                <RiUser3Line />
                  </div>
                  <div className="">
                    <Heading
                      as="h4"
                      className="text-xl font-semibold mb-2"
                      text="Web Design"
                    />
                    <Heading
                      as="p"
                      className="text-gray-400 text-sm"
                      text="Creating clean, user-friendly layouts with a focus on performance and accessibility."
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg text-black shadow-lg border-r-2 border-primary cursor-pointer hover:scale-105 duration-300  flex items-center  space-x-4 ">
                <div className=" p-4 rounded-full bg-[#eff7f9] text-primary ">
                <PiPresentationBold />
                </div>
                <div className="">
                  <Heading
                    as="h4"
                    className="text-xl font-semibold mb-2"
                    text="Project Management"
                  />
                  <Heading
                    as="p"
                    className="text-gray-400 text-sm"
                    text="Leading projects from conception to completion with agile methodologies."
                  />
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default AboutMe;








    // <svg
    //                 class="h-6 w-6"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    //                 />
    //               </svg>