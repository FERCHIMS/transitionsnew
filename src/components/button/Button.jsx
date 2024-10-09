'use client'
/* import { useState } from "react" */


const Button = ({isOpen, onClick, ...args }) => {
    /* const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)

    } */

    return (
        <div className=" sm:hidden block  z-[60] h-fit  overflow-hidden ">
            <button onClick={onClick} {...args} className=" p-3 z-[60] ">

                <div className= {`w-[50px] h-fit  flex flex-col gap-3 overflow-hidden transition-all duration-[1200ms] ${isOpen ? "translate-x-[-0.25rem] " : "translate-x-0"} `} >
                    <div className={`w-full  h-[5px] transition-all duration-700 bg-[#ffffffdb] ${isOpen ? "rotate-[-45deg] translate-y-[1rem] translate-x-1" : "rotate-0 translate-y-[0rem] "} `} ></div>
                    <div className={`w-full  h-[5px] transition-all duration-700 bg-[#ffffffdb] ${isOpen ? "opacity-0" : "opacity-100"} `} ></div>
                    <div className={`w-full  h-[5px] transition-all duration-700 bg-[#ffffffdb] ${isOpen ? "rotate-[45deg] translate-y-[-1.1rem] translate-x-[0.25rem] " : "rotate-0 translate-y-[0rem] "} `} ></div>
                </div>
            </button>
        </div>
    )
}

export default Button
