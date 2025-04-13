import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
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

function App() {
  return(
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/borrowed' element={<BorrowedPage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/bookinfo' element={<BookInfoPage />} />
          <Route path='/expiredbookinfo' element={<ExpiredBookInfoPage />} />
          <Route path='/reviewpayment' element={<ReviewPaymentPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
