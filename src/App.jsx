import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductsPage from './perundurai-surgicals/pages/ProductsPage';
import HomePage from './perundurai-surgicals/pages/HomePage';
import ThiyashPage from './thiyash-enterprise/pages/ThiyashPage';
import ThiyashProductsPage from './thiyash-enterprise/pages/ThiyashProductsPage';
import ScrollToTop from './perundurai-surgicals/components/ScrollToTop';

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
        <Route path="/enterprise" element={<ThiyashPage />} />
        <Route path="/enterprise/products" element={<ThiyashProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
