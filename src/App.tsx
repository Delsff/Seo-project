import "./App.css";
import { FirstPage } from "./components/FirstPage/FirstPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SecondPage } from "./components/SecondPage/SecondPage";
import { ThreePage } from "./components/ThreePage/ThreePage";
import { FourPage } from "./components/FourPage/FourPage";
import { FaqPage } from "./pages/Faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThreePage" element={<ThreePage />} />
          <Route path="/FourPage" element={<FourPage />} />
          <Route path="/Faq" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
