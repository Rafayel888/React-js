import { Outlet } from "react-router-dom"
import { Menu } from "../menu/Menu"
export const Layout = () =>{
  return(<>
    <Menu/>
    <Outlet/>
    </>)
}