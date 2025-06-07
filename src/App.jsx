import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import BooksPage from './pages/BooksPage';
import BorrowedPage from './pages/BorrowedPage';
import AboutUsPage from './pages/AboutUsPage';
import BookInfoPage from './pages/BookInfoPage';
import ExpiredBookInfoPage from './pages/ExpiredBookInfoPage';
import ReviewPaymentPage from './pages/ReviewPaymentPage';
import CartPage from './pages/CartPage';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5090/api/Book')
      .then(res => {
        console.log(res.data); // Isso deve aparecer no console
      })
      .catch(err => {
        console.error('Erro ao buscar dados:', err);
      });
  }, []);

  return(
    <AuthProvider>
      <Router>
        <Navbar onSearch={setSearch} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/books' element={<BooksPage search={search} />} />
            <Route path='/borrowed' element={<BorrowedPage />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/bookinfo/:id' element={<BookInfoPage />} />
            <Route path='/expiredbookinfo' element={<ExpiredBookInfoPage />} />
            <Route path='/reviewpayment/:id' element={<ReviewPaymentPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
