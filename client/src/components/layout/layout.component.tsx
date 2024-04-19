import { Outlet } from "react-router-dom"
import { Wrapper } from "../UI/wrapper/"
import { Header } from "../header"
import { ToastContainer } from "react-toastify"


export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <main> 
        <Outlet />
        <ToastContainer />
      </main>
    </Wrapper>
  )
}