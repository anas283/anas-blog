'use client';

import Image from "next/image";
import MenuImage from "../../../public/menu.png";
import CloseImage from "../../../public/close.png";
import LogoImage from "../../../public/anas_web_logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((open) => !open);
    console.log('toggle menu');
  }

  return (
    <div className="flex max-w-screen-lg mx-auto items-center justify-between px-6 pt-6 md:px-0 overflow-x-hidden">
      <div className="flex justify-between w-full">
        <Link href="/">
          <Image src={LogoImage} alt="profile" className="w-10 h-10" />
        </Link>
        <Image src={MenuImage} alt="profile" className="flex md:hidden w-8 h-8"
          onClick={handleMenu}
        />
        <div className="hidden md:grid grid-cols-5 gap-5">
          <Link 
            href="work" 
            className={isActive("/work") ? 
              "h-fit text-blue-500 text-center cursor-pointer underline underline-offset-4":
              "h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150"
            }
          >
            Work
          </Link>
          <Link 
            href="about" 
            className={isActive("/about") ? 
              "h-fit text-blue-500 text-center cursor-pointer underline underline-offset-4":
              "h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150"
            }
          >
            About
          </Link>
          <a href="/resume_anas.pdf" target="_blank" className="h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150">
            Resume
          </a>
          <a href="mailto:muhammadanasbinadam@gmail.com" target="_blank" className="h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150">
            Contact
          </a>
          <a href="https://github.com/anas283" target="_blank" className="h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150">
            GitHub
          </a>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`h-screen w-screen flex justify-center items-center bg-gray-100 duration-300 fixed transition-all ease-in-out top-0 right-0 z-10 ${open ? "translate-x-0":"translate-x-full"}`}
      >
        <Image src={CloseImage} alt="profile" className="flex md:hidden w-6 h-6 absolute top-7 right-6"
          onClick={handleMenu}
        />
        <div className="flex flex-col">
          <Link 
            href="work" 
            className={isActive("/") ? 
              "text-xl mt-5 h-fit text-blue-500 text-center cursor-pointer underline underline-offset-4":
              "text-xl mt-5 h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150"
            }
            onClick={handleMenu}
          >
            Home
          </Link>
          <Link 
            href="work" 
            className={isActive("/work") ? 
              "text-xl mt-5 h-fit text-blue-500 text-center cursor-pointer underline underline-offset-4":
              "text-xl mt-5 h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150"
            }
            onClick={handleMenu}
          >
            Work
          </Link>
          <Link 
            href="about" 
            className={isActive("/about") ? 
              "text-xl mt-5 h-fit text-blue-500 text-center cursor-pointer underline underline-offset-4":
              "text-xl mt-5 h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150"
            }
            onClick={handleMenu}
          >
            About
          </Link>
          <a href="/resume_anas.pdf" target="_blank" className="text-xl mt-5 h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150"
            onClick={handleMenu}
          >
            Resume
          </a>
          <a href="mailto:muhammadanasbinadam@gmail.com" target="_blank" className="text-xl mt-5 h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150"
            onClick={handleMenu}
          >
            Contact
          </a>
          <a href="https://github.com/anas283" target="_blank" className="text-xl mt-5 h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150"
            onClick={handleMenu}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar