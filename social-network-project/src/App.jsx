import { Outlet } from "react-router"
import NavBar from "./components/NavBar"

function App() {

  return (
    <> 
      <NavBar/> 
      <Outlet className="mt-20"/>
    </>
  )
}

export default App
