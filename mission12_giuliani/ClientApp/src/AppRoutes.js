// import { TeamInfo } from "./components/TeamInfo";
import { TeamData } from "./components/TeamData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-data',
    element: <TeamData />
  }
];

export default AppRoutes;
