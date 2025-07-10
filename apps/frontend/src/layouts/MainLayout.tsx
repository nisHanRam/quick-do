import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      MainLayout <main>{<Outlet />}</main>
    </div>
  );
};

export default MainLayout;
