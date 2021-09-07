import About from "../page/about/about.page";
import Contact from "../page/contact/contact.page";
import Home from "../page/home/home.page";
import Portfolio from "../page/portfolio/portfolio.page";

export const mainRoutes = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/about",
    exact: true,
    Component: About,
  },
  {
    path: "/portfolio",
    exact: true,
    Component: Portfolio,
  },
  {
    path: "/contact",
    exact: true,
    Component: Contact,
  },
];
