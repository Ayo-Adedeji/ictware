import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuctionPage from "./pages/AuctionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auction" element={<AuctionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
