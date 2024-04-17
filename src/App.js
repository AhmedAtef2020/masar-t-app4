import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Services from "./pages/services"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="sevices" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
