import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.scss";
import MainLayout from "./components/MainLayout";
import Main from "./components/Main";
import Login from "./components/Login"

const App = () => {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      </HashRouter>
    // </BrowserRouter>
  );
};

export default App;