import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import { ThemeProvider } from './ThemeContext';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--color-background)',
            color: 'var(--color-text)',
            textAlign: 'center',
          },
        }}
      />
    </ThemeProvider>
  );
}

export default App;
