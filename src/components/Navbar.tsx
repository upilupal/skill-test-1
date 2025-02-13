import { useState } from "react";

const navLinks = [
   { label: "Home", href: "#" },
   { label: "Feature", href: "#feature" },
   { label: "Service", href: "#service" },
   { label: "Product", href: "#product" },
   { label: "About Us", href: "#about" },
];
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleDrawer = () => {
      setIsOpen(!isOpen);
   };
   return (
      <>
         <section className="py-[45px] lg:py-10 w-screen bg-transparent">
            
               <div className="flex gap-8 justify-between px-5 md:justify-end lg:pr-28  items-center w-full">
                  <nav className="md:flex gap-10 font-semibold justify-center items-center hidden">
                     {navLinks.map((link) => (
                        <a
                           href={link.href}
                           key={link.label}
                           className="text-black/70 text-base"
                        >
                           {link.label}
                        </a>
                     ))}
                     <button className="text-[#EF4444] text-base">Login</button>
                  </nav>

                {/* hamburger menu */}
                  <div
                     className="md:hidden cursor-pointer z-50 relative"
                     onClick={toggleDrawer}
                  >
                     {isOpen ? (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="feather feather-x"
                        >
                           <line x1="18" y1="6" x2="6" y2="18"></line>
                           <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                     ) : (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="feather feather-menu"
                        >
                           <line x1="3" y1="6" x2="21" y2="6"></line>
                           <line x1="3" y1="12" x2="21" y2="12"></line>
                           <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                     )}
                  </div>
                {/* hamburger menu */}

                  <button className="bg-[#EF4444] px-5 p-2.5  rounded-md text-white text-sm font-semibold">
                     Sign Up
                  </button>
               </div>
            
         </section>

         <div
            className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transform ${
               isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden z-40 pt-20`}
         >
            <nav className="flex flex-col gap-10 p-6 font-medium">
               {navLinks.map((link) => (
                  <a
                     href={link.href}
                     key={link.label}
                     className="text-black text-lg"
                     onClick={toggleDrawer}
                  >
                     {link.label}
                  </a>
               ))}
               <button className="text-[#EF4444] text-left text-lg">Log In</button>
            </nav>
         </div>
      </>
   );
};

export default Navbar;
