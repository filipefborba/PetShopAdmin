// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Add from "@material-ui/icons/Add";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Owner from "views/Owner/Owner.jsx";
import Querys from "views/Querys/Querys.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Cadastros",
    navbarName: "Cadastrar",
    icon: Add,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Tabelas",
    navbarName: "Tabelas",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/owner",
    sidebarName: "Dono",
    navbarName: "Dono",
    icon: "person",
    component: Owner
  },
  {
    path: "/querys",
    sidebarName: "Consultas",
    navbarName: "Consultas",
    icon: "search",
    component: Querys
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
