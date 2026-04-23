import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';

// Use Vite's BASE_URL so routing works on both localhost and GitHub Pages
const basename = import.meta.env.BASE_URL;

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/surgicals" element={<HomePage />} />
        <Route path="/surgicals/products" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/enterprise" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
