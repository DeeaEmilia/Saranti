import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, SuccessPage } from "./pages";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="success" element={<SuccessPage />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/blog-page" element={<BlogPage />} />
      <Route path="/shop-page" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
