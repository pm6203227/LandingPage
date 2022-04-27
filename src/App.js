import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";
import HomePage from "./paginas/HomePage";
import AboutPage from "./paginas/AboutPage";
import ProjectsPage from "./paginas/ProjectsPage";
import ContactPage from "./paginas/ContactPage";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Project" element={<ProjectsPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
