import { lazy, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ChangeThemeColor from "./components/shared/ChangeThemeColor";
const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  const [themeColor, setThemeColor] = useState("#4CAF50");

  return (
    <BrowserRouter>
      <ChangeThemeColor color={themeColor} />
      <Home />
      {/* <Dashboard /> */}
    </BrowserRouter>
  );
};

export default App;
