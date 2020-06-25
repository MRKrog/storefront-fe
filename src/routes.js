import Storefront from "./views/Storefront";

const routes = [
  {
    path: "/index",
    name: "Storefront",
    component: Storefront
  },
  {
    redirect: true,
    path: "/",
    to: "/index",
    name: "Storefront",
    component: Storefront
  }
];

export default routes;
