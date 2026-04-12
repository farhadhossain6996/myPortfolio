import { useState } from "react";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/fs.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const Header = () => {
const[open, setOpen] = useState(false)


  return (
    <>
      <div className=" fixed top-0 left-0 right-0 z-10 ">
        <Container>
          <div className=" flex justify-between  items-center">
            <div className="w-[75px] h-[75px]">
              <Image ImgSrc={logo} />
            </div>
{/* DeskTopMenu */}

            <div className="">
              <ul className="hidden md:flex justify-between items-center gap-10 font-medium ">
                <Link
                  to="/"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="aboutme"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  About Me
                </Link>
                <Link
                  to="skills"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  to="MyServices"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  My Services
                </Link>
              </ul>
            </div>
            <div className=" hidden md:block text-white">
              <Link to="ContectMe">
                <Button
                  className="bg-primary  text-white cursor-pointer hover:scale-105  hover:bg-white duration-300 hover:text-[#00bbff]"
                  btnText="HIRE ME"
                />
              </Link>
            </div>

{/* MobileMenu Button */}
<button  
  onClick={() => setOpen(true)}
  className={`md:hidden text-3xl ${open ? "hidden" : "block"}`}
>
  <IoMenu />
</button>

{/* MobileMenu */}

{open &&(
  <div className="absolute top-[60px] left-0 w-full bg-white shadow-md md:hidden font-medium">

  {/* Close Button */}
  <div className="absolute top-3 right-5 text-3xl cursor-pointer"
       onClick={() => setOpen(false)}>
    <CgClose />
  </div>

    <ul className="flex flex-col items-center gap-5  py-4 mt-8  ">





                <Link
                  to="/"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="aboutme"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  About Me
                </Link>
                <Link
                  to="skills"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  to="MyServices"
                  className="hover:text-primary transition duration-200 cursor-pointer"
                >
                  My Services
                </Link>
              </ul>
  </div>
)


}
          </div>




        </Container>
      </div>
    </>
  );
}

export default Header;
