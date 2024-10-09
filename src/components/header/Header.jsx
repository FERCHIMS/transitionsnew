'use client'
import { useState } from "react"
import Link from "next/link"
import { links } from "./Links"
import Button from "../button/Button"
import DropLinks from "./DropLinks"
import { usePathname } from "next/navigation"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname()

  const handleOpen = () => {
    setIsOpen(!isOpen)

  }
  /* const handleLink = (href) => {
    if (pathName === href) {
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }; */

  return (
    <div className={`fixed overflow-hidden z-30 w-full flex-col flex justify-between sm:justify-center items-top gap-2  bg-pink-200 transition-all duration-[1200ms] ${isOpen ? "h-screen " : "h-16"} `}>
      <Button isOpen={isOpen} onClick={handleOpen} />

     
        <div className="justify-center hidden sm:block items-start gap-2 pt-5 pr-10 transition-all duration-[1200ms]">
          <div className="flex justify-center gap-2">
            {links.map((link) => (

            <li className={`sm:block hidden`} key={link.title} >
              <Link href={link.href} > {link.title} </Link>
            </li>
          ))}
          </div>
          
        </div>
      
        <div className={`w-full block sm:hidden fixed h-[100vh] transition-all  duration-[1200ms]  ${isOpen ? "opacity-100" : "opacity-0"} `} >
          <DropLinks />
        </div>
      
        
     

    </div>
  )
}

export default Header

{/* <Link href="/">HOME</Link>
          <Link href="/mas" >MAS</Link>
          <Link href="/pruebas" >PRUEBAS</Link> */}