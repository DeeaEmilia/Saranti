import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductPage, SuccessPage } from './pages';

function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="product/:slug" element={<ProductPage />} />
            <Route path="success" element={<SuccessPage />} />
        </Routes>
    );
}

export default App;
