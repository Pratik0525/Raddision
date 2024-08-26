import Footera from "../Footer/Footer";
import Navigation from "../Component/Navigation/Nav";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Navigation />
        <div>
          <Outlet />
        </div>
        <Footera />
      </div>
    </>
  );
};

export default Layout;
