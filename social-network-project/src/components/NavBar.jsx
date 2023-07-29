import { RiSearchLine, RiContrastFill } from "react-icons/ri";

const NavBar = ()=>{

    return (
        <nav className="bg-black-100 w-full fixed top-0 h-14 text-center flex justify-between items-center">
            <h1 className=" w-20">LOGO</h1>
            <form action="/" className=" relative w-1/2">
                <input type="text" placeholder="Buscar usuario" className=" rounded-full py-2 px-4 pr-10 focus:outline-none focus:border-black-500 w-full" />
                <button className="absolute right-0 top-1 mt-2 mr-3"><RiSearchLine/></button>
            </form>
            <ul className="flex justify-end items-center w-1/3">
                <li><a href="/" className="mr-4">📖</a></li>
                <li><a href="/" className="mr-4">🌓</a></li>
                <li><a href="/about/" className="mr-4">📩</a></li>
                <li><a href="#" className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" >Registrase</a></li>
                <li><a href="#" className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">Iniciar Sesión</a></li>
            </ul>
        </nav>
    )
}

export default NavBar