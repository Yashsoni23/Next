import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const navbar = useRef();
    const [width, setWidth] = useState({width:undefined});
    const [showMenu, setshowMenu] = useState(false);

    useEffect(() => {
        setWidth({ width: window.innerWidth });
    },[] )
    const showNavbar = () => {
        navbar.current.classList.toggle("myAnimate");
    }
    return (
        <>
            {width.width < 600 ?
                <nav className="nav w-full h-max p-2 flex shadow-2xl relative z-50 justify-between bg-blue-300">
                    <h1 className="text-3xl z-50  text-gray-800  font-bold">Next SSG</h1>
                    <div ref={navbar} className="nav-con hidden  w-full h-max absolute ">
                        <ul className="ul p-1 gap-6 font-bold text-white text-2xl">

                            <Link href="/" className=" li p-3 hover:text-red-600 cursor-pointer">Home</Link>
                            <Link href="/Blogs" className=" li p-3 hover:text-red-600 cursor-pointer">Blogs</Link>
                            <Link href="/Profiles" className=" li p-3 hover:text-red-600 cursor-pointer">Profiles</Link>
                            <Link href="/About" className=" li p-3 hover:text-red-600 cursor-pointer">About</Link>
                        </ul>
                    </div>
                    <GiHamburgerMenu className="text-4xl btn" onClick={showNavbar} />
                </nav>
                :
                <nav className="nav w-full h-max p-2 flex shadow-2xl relative z-50 justify-between bg-blue-300">
                    <h1 className="text-3xl z-50  text-gray-800  font-bold">Next SSG</h1>
                    <ul className="flex   p-1 gap-6 font-bold text-white text-2xl">

                        <Link href="/" className="   hover:text-red-600 cursor-pointer">Home</Link>
                        <Link href="/Blogs" className="   hover:text-red-600 cursor-pointer">Blogs</Link>
                        <Link href="/Profiles" className="   hover:text-red-600 cursor-pointer">Profiles</Link>
                        <Link href="/About" className=" pr-8  hover:text-red-600 cursor-pointer">About</Link>
                    </ul>
                
                    
                </nav>
            }

        </>
    )
}

export default Navbar