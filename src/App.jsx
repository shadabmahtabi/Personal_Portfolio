import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"))

const App = () => {
  return (
    <>
      <Home />
      {/* <Dashboard /> */}
    </>
  );
};

export default App;
