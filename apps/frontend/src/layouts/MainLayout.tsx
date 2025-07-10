import Navigation from "@/components/common/Navigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navigation/> <main>{<Outlet />}</main>
    </div>
  );
};

export default MainLayout;
