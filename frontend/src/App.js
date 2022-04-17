// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ServiceRequestPage from "./pages/ServiceRequestPage/ServiceRequestPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterElectricianPage from "./pages/RegisterElectricianPage/RegisterElectricianPage";
import ElectriciansPage from "./pages/ElectriciansPage/ElectriciansPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/schedule" element={<ServiceRequestPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/registerelectrician" element={<RegisterElectricianPage />} />
        <Route path="/electricians" element={<ElectriciansPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
