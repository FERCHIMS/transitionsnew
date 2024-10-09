import Link from "next/link"
import { links } from "./Links"
import { useState, useEffect, useRef } from "react"


const DropLinks = ({isOpen, onClick }) => {
    
    const [isInView, setIsInView] = useState(false);
    const linkRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting)
            },
            {
                rootMargin:"-100px"
            }
        )
        if (linkRef.current) {
            observer.observe(linkRef.current)
        }
        return () => {
            if (linkRef.current) {
                observer.unobserve(linkRef.current)
            }
        }
    }, [])

  return (
    <div ref={linkRef} className={` w-full pt-20 flex flex-col items-center justify-center ${isInView ? "opacity-100" : "opacity-0"} `}>
        {links.map((link) => (
            <div  key={link.title}>
                <li className={`flex justify-center items-center transition duration-[1200ms] ${isInView ? "opacity-100" : "opacity-0"} `}>
                    <Link  onClick={onClick} isOpen={isOpen} className="text-[4rem] text-center font-black"  href={link.href}>  {link.title} </Link>
                </li>
            </div>
        ))}
    </div>
  )
}

export default DropLinks