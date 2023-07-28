import { useState } from "react"
import { RiHome2Line, RiCalendarEventLine, RiChat3Line, RiAccountCircleLine, RiSettings5Line } from "react-icons/ri";

const SideBar = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const colorButton = isClicked ? "bg-black-50" : " ";



  return (
    <>
    <nav className="bg-black-100 fixed left-0 w-20 top-14 bottom-0 h-90 text-center">
      <ul className="flex flex-col justify-between text-4xl pl-5">
        <li onClick={handleClick} title="Inicio" className={`my-4 md:my-6 lg:my-8 
        rounded-tl-xl rounded-bl-xl hover:bg-[#ffffff] w-full pt-2 pb-2 ${colorButton}`}>
          <a href="#">
            <RiHome2Line/>
          </a>
        </li>
        <li onClick={handleClick} title="Perfil" className={`my-4 md:my-6 lg:my-8 
        rounded-tl-xl rounded-bl-xl hover:bg-[#ffffff] w-full pt-2 pb-2 ${colorButton}`}>
          <a href="#">
            <RiAccountCircleLine/>
          </a>
        </li>
        <li onClick={handleClick} title="Eventos" className={`my-4 md:my-6 lg:my-8 
        rounded-tl-xl rounded-bl-xl hover:bg-[#ffffff] w-full pt-2 pb-2 ${colorButton}`}>
          <a href="#">
            <RiCalendarEventLine/>
          </a>
        </li>
        <li onClick={handleClick} title="Chat" className={`my-4 md:my-6 lg:my-8 
        rounded-tl-xl rounded-bl-xl hover:bg-[#ffffff] w-full pt-2 pb-2 ${colorButton}`}>
          <a href="#">
            <RiChat3Line/>
          </a>
        </li>
        <li onClick={handleClick} title="Configuracion" className={`mt-4 md:mt-6 lg:mt-8 
        rounded-tl-xl rounded-bl-xl hover:bg-[#ffffff] w-full pt-2 pb-2 ${colorButton}`}>
          <a href="#">
            <RiSettings5Line/>
          </a>
        </li>
      </ul>
    </nav>
    {/* mobile */}
    <nav>

    </nav>
    </>
  );
};

export default SideBar;
/* 'black': {
    '50': '#f7f7f7',
    '100': '#e3e3e3',
    '200': '#c8c8c8',
    '300': '#a4a4a4',
    '400': '#818181',
    '500': '#666666',
    '600': '#515151',
    '700': '#434343',
    '800': '#383838',
    '900': '#313131',
    '950': '#000000',
}, */
