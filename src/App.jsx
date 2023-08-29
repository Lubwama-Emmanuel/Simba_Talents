import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServicesPage from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
