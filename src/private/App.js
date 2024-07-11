import { Outlet } from "react-router-dom";
import './App.css'

import Provider from "./context/Provider"
import HeaderAdmin from "./components/header/HeaderAdmin";
import FooterAdmin from "./components/footer/FooterAdmin";

function AppPrivate() {
  return (
      <Provider>
      <HeaderAdmin/>
      <Outlet />
      <FooterAdmin/>
      </Provider>
  );
}

export default AppPrivate;
