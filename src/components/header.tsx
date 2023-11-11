import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header
      className={`
    fixed
        top-0
        z-[999]
        flex
        w-full
        flex-col
        items-start
        justify-between
       
        
        
    
      
        border-b
        border-neutral-700
       
       
        bg-dark bg-opacity-70 px-3 py-4 backdrop-blur md:flex-row md:items-center  md:px-10 md:py-8 
        `}
    >
      <div
        className="

      flex w-full items-center

      justify-between
        md:w-auto
      
      "
      >
        <h1
          className="font-MartianMono
                text-base font-semibold
                text-white md:text-lg"
        >
          <a href="/">dapoadedire.</a>
        </h1>

        <div
          className="md:hidden"
        >
          <Hamburger
            toggled={isOpen}
            toggle={toggle}
            duration={0.3}
            size={25}
            easing="ease-in"
            label="Show menu"
            color={`${isOpen ? "#10b981" : "#fff"}`}
          />
        </div>
      </div>
      <nav className={`
        overflow-hidden
        transition-[max-height]
        duration-300
        ease-out
        ${isOpen ? 'max-h-96' : 'max-h-0 '}
        md:block
        md:max-h-full
        
        
        
      `}>

        <ul
          className="
          mt-4
          md:mt-0
          flex flex-col
          justify-between gap-4 text-sm md:flex-row 
                md:items-center
                md:gap-8

               
                
                "
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              {/* <a
                href={link.path}
                className="
                            flex
                            items-center
                            gap-2
                            uppercase 
                            text-light
                            font-medium
                            transition
                            duration-300
                            ease-in-out
                            hover:font-semibold
                            hover:text-white
                            
                            
                            hover:underline
                            "
              >
                <span
                  className="
              
                 text-emerald-500 md:hidden font-bold"
                >
                  {'>'}
                </span>
                {link.name}
              </a> */}
              
      <HeaderLink href={link.path} className="flex items-center gap-2 uppercase text-light font-medium transition duration-300 ease-in-out hover:font-semibold hover:text-white hover:underline">
        <span className="text-emerald-500 md:hidden font-bold">{'>'}</span>
        {link.name}
      </HeaderLink>
    </li>
            
          ))}
        </ul>
      </nav>
    </header>
  );
};

const navLinks = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  
  {
    name: "Contact",
    path: "/#contact",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
  
  
];
