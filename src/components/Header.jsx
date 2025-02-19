// import { useLocation } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";

// import { brainwave } from "../assets";
// import { logovvi } from "../assets";
// import { logovvvi } from "../assets";

// import { navigation } from "../constants";
// import Button from "./Button";
// import MenuSvg from "../assets/svg/MenuSvg";
// import { HamburgerMenu } from "./design/Header";
// import { useState } from "react";

// const Header = () => {
//   const pathname = useLocation();
//   const [openNavigation, setOpenNavigation] = useState(false);

//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//       enablePageScroll();
//     } else {
//       setOpenNavigation(true);
//       disablePageScroll();
//     }
//   };

//   const handleClick = () => {
//     if (!openNavigation) return;

//     enablePageScroll();
//     setOpenNavigation(false);
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50  border-b border-n-1 lg:bg-n-1 lg:backdrop-blur-sm ${
//         openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
//       }`}
//     >
    
//       <div className="flex items-center px-8 lg:px-7.5 xl:px-13 max-lg:py-5">
//       <h1  >VilaSita</h1>
//         {/* <a className="block w-[12rem] xl:mr-3" href="#hero">
//           <img src={logovvvi} width={60} height={10} alt="Brainwave" />
//         </a> */}

//         <nav
//           className={`${
//             openNavigation ? "flex" : "hidden"
//           } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-1 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
//             {navigation.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.url}
//                 onClick={handleClick}
//                 className={`block relative font-code text-2xl uppercase text-n-8 transition-colors hover:text-color-4 ${
//                   item.onlyMobile ? "lg:hidden" : ""
//                 } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
//                   item.url === pathname.hash
//                     ? "z-2 lg:text-n-8"
//                     : "lg:text-n-4"
//                 } lg:leading-5 lg:hover:text-n-4 xl:px-12`}
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>

//           {/* <HamburgerMenu /> */}
//         </nav>

//         <a
//           href="#signup"
//           className="button hidden mr-8 text-n-3 transition-colors hover:text-n-8 lg:block"
//         >
//           New account
//         </a>
//         {/* <Button className="hidden lg:flex" href="#login">
//           Sign in
//         </Button> */}

//         {/* <Button
//           className="ml-auto lg:hidden"
//           px="px-3"
//           onClick={toggleNavigation}
//         >
//           <MenuSvg openNavigation={openNavigation} />
//         </Button> */}
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 bg-white ${openNavigation ? "bg-opacity-90" : "bg-opacity-90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-8 lg:px-7.5 xl:px-13 py-5">
        <h1 className="font-bold text-xl">VilaSita</h1>
        <nav className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto ${openNavigation ? "flex" : "hidden"}`}>
          <div className="flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a key={item.id} href={item.url} onClick={handleClick} className={`block relative font-code text-2xl uppercase text-black transition-colors hover:text-gray-700 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "lg:text-black" : "lg:text-gray-500"} lg:leading-5`}>
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a href="#signup" className="button hidden mr-8 text-gray-500 transition-colors hover:text-black lg:block">
          New account
        </a>
      </div>
    </div>
  );
};

export default Header;
