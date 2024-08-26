import { Routes, Route } from "react-router-dom";
import Signups from "./Page/Signup/Signup";
import Home from "./Page/Home/Home";
import Layout from "./HOC/Layout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="/signupss" element={<Signups />} />
      </Routes>
    </div>
  );
};

export default App;
