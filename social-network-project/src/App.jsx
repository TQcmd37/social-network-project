import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"
import { ContextProvider } from "./provider/ContextProvider";

function App() {

  return (
    <>
    <ContextProvider>
      <NavBar/>
      <Outlet/>
    </ContextProvider>
      
    </>
  )
}

export default App
