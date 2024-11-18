import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Brand_Logo from "../../assets/brand_Logo.png"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  const navigateButtonClick = () => {
    navigate("/contact");
  };

   // Toggle dropdown when "Project" is clicked
   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

   // Close the dropdown if the user clicks outside of it
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setIsDropdownOpen(false);
       }
     };

     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
   }, [])

 return (
   <header
     className={` z-50  fixed top-0 left-0 right-0 transition-all duration-500 ${
       scrolled
         ? "backdrop-blur-md bg-black/40"
         : " md:bg-transparent bg-white "
     }`}
   >
     <nav className="max-w-7xl me-auto ms-auto flex items-center justify-between h-[10vh] font-[400] py-10">
       {/* BRAND IDENTITY */}
       <div className="z-50 w-full md:px-0 py-5 px-3 md:w-[90px] md:block flex justify-between items-center ">
         <Link
           className="flex items-center justify-center hover:translate-y-1 duration-500   "
           to="/"
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         >
           <img
             height="auto"
             width={80}
             src={Brand_Logo}
             alt="TheAutobiography Logo"
             className="md:w-[80px] w-[60px]"
           />
         </Link>
         <div
           className="text-4xl md:hidden block text-[#dfbf6c]"
           onClick={() => setOpen(!open)}
         >
           {open ? <IoClose /> : <IoMenu />}
         </div>
       </div>

       <ul
         className={`md:flex md:flex-row md:w-3/5  md:items-center md:justify-between md:static absolute md:top-0  top-[4.9em] px-5 py-14  flex flex-col items-start gap-10 duration-700 md:text-white text-black ${
           open ? "left-0" : "left-[-100%]"
         } bg-white md:bg-transparent font-semibold md:h-3 h-[100vh] w-3/4`}
       >
         <li>
           <Link
             to="/"
             className={`hover:text-[#dfbf6c] md:text-[white] inline-block text-[16px] hover:translate-y-1 duration-500  ${
               active === "/" ? "text-[#dfbf6c]" : " "
             }`}
             onClick={() => scrollToSection("/")}
           >
             Overview
           </Link>
         </li>
         <li>
           <Link
             to="/about"
             className={` hover:text-[#dfbf6c] md:text-[white]  inline-block text-[15px] hover:translate-y-1 duration-500  ${
               active === "/about" ? "text-[#dfbf6c]" : " "
             }`}
             onClick={() => scrollToSection("/about")}
           >
             Our Journey
           </Link>
         </li>
         <li className="relative" ref={dropdownRef}>
           <button
             onClick={toggleDropdown}
             aria-expanded={isDropdownOpen}
             className={`hover:text-[#dfbf6c] md:text-[white] inline-block text-[15px] hover:translate-y-1 duration-500 `}
           >
             Projects
           </button>
           {isDropdownOpen && (
             <ul
               className={`w-[170px] absolute  bg-black p-5 transition-all duration-700 flex items-start justify-center flex-col   ${
                 isDropdownOpen
                   ? "translate-y-0 mt-10 opacity-100 duration-700 ease-in-out"
                   : "translate-y-full opacity-0 mt-20 duration-700 ease-in-out"
               } overflow-hidden`}
             >
               <li>
                 <Link to="/viprop">VI Project</Link>
               </li>
               <li>
                 <Link to="/ikejaprop">Ikeja Project</Link>
               </li>
               <li>
                 <Link to="/ikoyiprop">Ikoyi Project</Link>
               </li>
             
             </ul>
           )}
         </li>
         <button onClick={navigateButtonClick} className="border-2 rounded-md py-3 border-[#dfbf6c] px-4 hover:bg-[#dfbf6c] md:text-[white] hover:translate-y-1 duration-500">
           Get in Touch
         </button>
       </ul>

       {/* <ul
         className={`hidden lg_sm:block z-40 bg-white absolute w-full h-[100vh] top-[65px] py-20 pl-4 duration-500 ${
           open ? "left-0" : "left-[-100%]"
         }`}
       >
         <li>
           <button
             className="py-7 px-3 inline-block"
             onClick={() => scrollToSection("about")}
           >
             About
           </button>
         </li>
         <li>
           <button
             className="py-7 px-3 inline-block"
             onClick={() => scrollToSection("blastoff")}
           >
             Blastoff
           </button>
         </li>
         <li>
           <NavLink
             className="py-7 px-3 inline-block"
             to="https://forms.gle/mk4KBuPTHdExcM949"
             target="_blank"
           >
             Partner With Us
           </NavLink>
         </li>

         <Link className="py-5" to="https://tix.africa/jetpack" target="_blank">
           <button className=" shadow-inner bg-[#3A1686] py-2 px-7 text-white flex items-center justify-center gap-2">
             Get Ticket
             <MdOutlinePlayArrow className="text-2xl" />
           </button>
         </Link>
       </ul> */}
     </nav>
   </header>
 );
}

export default Navbar