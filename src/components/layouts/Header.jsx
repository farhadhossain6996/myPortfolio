import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/fs.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=" fixed top-0 left-0 right-0 z-10 ">
        <Container>
          <Flex className=" justify-between  items-center">
            <div className="w-[75px] h-[75px]">
              <Image ImgSrc={logo} />
            </div>
            <div className="">
              <ul className="flex justify-between items-center gap-10 font-medium ">
                <Link
                  to="/"
                  className="hover:text-[#00bbff] transition duration-200 cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="aboutme"
                  className="hover:text-[#00bbff] transition duration-200 cursor-pointer"
                >
                  About Me{" "}
                </Link>
                <Link
                  to="skills"
                  className="hover:text-[#00bbff] transition duration-200 cursor-pointer"
                >
                  Skills{" "}
                </Link>
                <Link
                  to="projects"
                  className="hover:text-[#00bbff] transition duration-200 cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  to="MyServices"
                  className="hover:text-[#00bbff] transition duration-200 cursor-pointer"
                >
                  My Services{" "}
                </Link>
              </ul>
            </div>
            <div className=" text-white">
              <Link to="ContectMe">
                <Button
                  className="bg-[#00bbff]  text-white cursor-pointer hover:scale-105  hover:bg-white duration-300 hover:text-[#00bbff]"
                  btnText="HIRE ME"
                />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Header;
