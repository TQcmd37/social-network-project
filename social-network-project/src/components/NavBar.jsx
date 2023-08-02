import { RiSearchLine, RiContrastFill, RiEmphasisCn, RiMenuLine } from "react-icons/ri";
import { useState } from "react";

import SideBar from "./SideBar";


const NavBar = ()=>{
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);

      };

    return (
        <>
        <nav className="bg-black-100 w-full fixed top-0 h-14 text-center flex justify-between items-center">
            <h1 className=" w-20 hidden lg:block">LOGO</h1>
            <button onClick={toggleMenu} className={`md:hidden text-4xl ml-5 text-black-600`}><RiMenuLine/></button>
            <form action="/" className=" relative w-1/2">
                <input type="text" placeholder="Buscar usuario" className=" rounded-full py-2 px-4 pr-10 focus:outline-none focus:border-black-500 w-full" />
                <button className="absolute right-0 top-1 mt-2 mr-3"><RiSearchLine/></button>
            </form>
            <ul className="flex justify-end items-center w:2/3 md:w-1/3 ">
                <li className="text-4xl mr-4 text-black-600 hover:bg-[#ffffff] rounded-lg" ><a href="/" ><RiEmphasisCn /></a></li>
                <li className="text-4xl mr-4 text-black-600 hover:bg-[#ffffff] rounded-lg"><a href="/"><RiContrastFill/></a></li>
                <li className="hidden md:block"><a href="#" className="mr-4 bg-blue-500 text-white hover:bg-blue-400  px-4 py-2 rounded-lg shadow-md" >Registrase</a></li>
                <li className="hidden md:block"><a href="#" className="mr-4 bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-lg shadow-md">Iniciar Sesión</a></li>
            </ul>
        </nav>
        <SideBar showMenu={showMenu}/>
        </>
    )
}

export default NavBar