import { Route, Routes, useLocation } from "react-router-dom";
import TwoWayBinding from "./pages/TwoWayBinding";
import GalleryProject from "./pages/GalleryProject";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import NestedRoute from "./pages/NestedRoute";
import Nest1 from "./pages/Nest1";
import Contact from "./pages/Contact";
import ContactDetails from "./pages/ContactDetails";
import AppContext from "./pages/AppContext";
import ProfileDetails from "./pages/ProfileDetails";
import AiWeb from "./pages/AiWeb";

const App = () => {
  const location = useLocation();
  return (
    <>
    {location.pathname !== "/ai" && <Navbar />}
      <Routes>
        <Route path="/" element={<TwoWayBinding />} />
      

      
        <Route path="/gallery" element={<GalleryProject />} />


        <Route path="/contact" element={<Contact />} />

        <Route path="/contact/:id" element={<ContactDetails />} />
      
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/profile" element={<ProfileDetails />} />

        <Route path="/appcontext" element={<AppContext />} />

        <Route path="/ai" element={<AiWeb />} />
      

      
        <Route path="/nestedroute" element={<NestedRoute />} >
          <Route path="nest1" element={<Nest1/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
