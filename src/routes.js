import Home from "./views/Home/Home";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    redirect: true,
    path: "/",
    to: "/home",
    name: "Home",
    component: Home
  }
];

export default routes;
