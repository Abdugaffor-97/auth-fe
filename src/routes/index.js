import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import SearchResults from "../pages/search/SearchResults";
import BlankLayout from "../layouts/BlankLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const routes = [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/search",
    component: SearchResults,
    layout: MainLayout,
    isProtected: true,
  },
  {
    path: "/auth/login",
    component: Login,
    layout: BlankLayout,
    isProtected: true,
  },
  {
    path: "/auth/register",
    component: Register,
    layout: BlankLayout,
    isProtected: true,
  },
];

export default routes;
