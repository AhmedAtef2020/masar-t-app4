import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Services from "./pages/services"
import AboutUs from "./pages/aboutUs"
import Profile from "./pages/profile"
import Library from "./pages/masarLibrary"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/masarLibrary" element={<Library />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
