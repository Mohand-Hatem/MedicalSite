import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Componants-nav/Navbar";
import Footer from "./Componant-footer/Footer";
import Total from "./Total";
import Contact from "./Componant-contact/Contact";
import TF from "./Switches/TF";
import FR from "./Switches/FR";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Total />}>
            <Route index element={<TF />} />
            <Route path="tf" element={<TF />} />
            <Route path="fr" element={<FR />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}
