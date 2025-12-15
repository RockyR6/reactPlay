import { Route, Routes } from "react-router-dom";
import TwoWayBinding from "./pages/TwoWayBinding";
import GalleryProject from "./pages/GalleryProject";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TwoWayBinding />} />
      </Routes>

      <Routes>
        <Route path="/gallery" element={<GalleryProject />} />
      </Routes>
    </>
  );
};

export default App;
