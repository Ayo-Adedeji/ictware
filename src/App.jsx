import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuctionPage from "./pages/AuctionPage";
import LiveSalesPage from "./pages/LiveSalesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/live-sales" element={<LiveSalesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
