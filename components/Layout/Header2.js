import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [scroll, setScroll] = useState(false);

  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        setToggle(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  return (
    <>
      <header>
        <nav
          className={`text-lg fixed w-full z-10 lg:py-3 py-2 ${scroll ? "bg-green shadow-lg" : " bg-green  "
            } `}
        >
          <div className="container w-full px-4 mx-auto 2xl:px-20 lg:px-6">
            <div className="flex flex-wrap items-center justify-between w-full md:py-0">
              <div>
                <Link
                  className="lg:h-[60px] md:h-14 flex items-center h-12"
                  href="/"
                >
                  <div className="flex items-center">
                    <img
                      src="/images/logo-top.png"
                      alt="logo"
                      className="lg:h-[60px] md:h-14 flex items-center h-12"
                    />
                  </div>
                </Link>
              </div>

              <button
                className="lg:hidden  md:inline-block inline-block border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
                type="button"
                onClick={toggleMenu}
              >
               <Icon icon="mingcute:menu-fill" color="#01d9b8" width="25" height="25" />
              </button>
              <div
                className={` flex lg:items-center lg:w-auto uppercase md:bg-nav lg:bg-transparent fixed top-0 right-0 bottom-0 lg:relative xl:w-auto z-50  ${isMenuOpen
                  ? "md:w-[50%] w-[70%]"
                  : " lg:inline-block md:hidden hidden"
                  }`}
                style={{ transition: "all .3s ease-in-out" }}
              >
                <ul className="relative pt-4 text-white navbar-nav-div md:pt-0">
                  <li className="flex justify-end w-full pr-3 pb-3 text-right lg:pt-0 lg:pb-0 ">
                    <button
                      className="lg:hidden border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline text-white"
                      type="button"
                      onClick={toggleMenu}
                    >
                      <Icon icon="maki:cross" color="#01d9b8" width="25" height="25" />
                    </button>
                  </li>
                  <li>
                    <Link className="block py-2 md:p-4" href="/">
                      <div
                        className={`w-full text-center whitespace-nowrap cursor-pointer text-sm hover:yellow  ${router.asPath === "/" && "redClr "
                          } `}
                        onClick={toggleMenu}
                      >
                        HOME

                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 md:p-4 " href="/About">
                      <div
                        className={`w-full text-center whitespace-nowrap cursor-pointer text-sm hover:yellow  ${router.asPath === "/About" && "redClr "
                          } `}
                        onClick={toggleMenu}
                      >
                        ABOUT US
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 md:p-4 " href="/services">
                      <div
                        className={`w-full text-center whitespace-nowrap cursor-pointer text-sm hover:yellow  ${router.asPath === "/services" && "redClr "
                          } `}
                        onClick={toggleMenu}
                      >
                        Services
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 md:p-4 " href="/Gallery">
                      <div
                        className={`w-full text-center whitespace-nowrap cursor-pointer text-sm hover:yellow  ${router.asPath === "/Gallery" && "redClr "
                          } `}
                        onClick={toggleMenu}
                      >
                        OUR SERVICES

                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 md:p-4 " href="/Contact">
                      <div
                        className={`w-full text-center whitespace-nowrap cursor-pointer text-sm hover:yellow  ${router.asPath === "/Contact" && "redClr "
                          } `}
                        onClick={toggleMenu}
                      >
                        BOOK
                        NOW
                      </div>
                    </Link>
                  </li>
                  <li className="flex items-center justify-center w-1/3 mx-auto cursor-pointer first-line: md:w-auto nav-item">
                    <Link href="#down"
                      className="btn lg:w-[220px] w-[210px] whitespace-nowrap  mx-auto lg:h-[45px] text-white px-3 lg:text-lg text-sm bg-btn flex items-center justify-center h-9"
                      onClick={toggleMenu}

                    >
                      GET FREE QUOTE NOW
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
