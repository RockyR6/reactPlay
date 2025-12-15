import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
// import Explore from "./components/Explore";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthContext } from "../context/AuthContext";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import Motion from "./pages/Motion";
import Trial from "./pages/Traial";
import Api from "./pages/Api";

function App() {
  const [theme, setTheme] = useState("light");
  const { authUser } = useContext(AuthContext);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/form"
          element={<FormPage />}
        />
        <Route
          path="/motion"
          element={<Motion />}
        />
        <Route
          path="/trial"
          element={<Trial user='rocky'/>}// Trial(rocky)
        />
        <Route
          path="/api"
          element={<Api user='rocky'/>}// Trial(rocky)
        />
      </Routes>

      {/* <Explore /> */}
    </div>
  );
}

export default App;
