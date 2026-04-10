import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuctionPage from "./pages/AuctionPage";
import LiveSalesPage from "./pages/LiveSalesPage";
import ProductPage from "./pages/ProductPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/live-sales" element={<LiveSalesPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
