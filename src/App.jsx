import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/surgicals" element={<HomePage />} />
        <Route path="/surgicals/products" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/enterprise" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}
