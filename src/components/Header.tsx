"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Marquee from "./Marquee";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8 ml-4 md:m-1 bg-black">
      <a href="/">
        <Image
            priority
            src={logo}
            alt="Follow us on Twitter"
            />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            {/* <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span> */}
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="pl-3">
            <Image
                priority
                src={logo}
                alt="Follow us on Twitter"
                />
            <div className="my-10">
                <div className="uppercase my-4"> <a href="/about">About</a></div>
                <div className="uppercase my-4"> <a href="/portfolio">Portfolio</a></div>
                <div className="uppercase my-4"> <a href="/contact">Contact</a></div>
            </div>
            </div>
                
            <Marquee/>
          </div>
        </section>
        <div className="mr-20">   
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        </div>
       
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-evenly;
        // align-items: center;
        padding-top: 2.25rem;
        font-color: white;
      }
    `}</style>
    </div>
  );
}
