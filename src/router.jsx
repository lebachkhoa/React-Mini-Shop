import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homepage";
import ROUTERS from "./utils/router";
import ProfilePage from "./pages/users/profilepage";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <Routes>
      {userRouter.map((item, key) => (
        <Route key={key} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
