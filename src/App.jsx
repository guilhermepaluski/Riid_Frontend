import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
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
import UserPage from './pages/UserPage';
import DownloadBookPage from './pages/DownloadBookPage';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import { jwtDecode } from 'jwt-decode';
import UserNotLogged from './pages/UserNotLogged';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [search, setSearch] = useState("");
  const { logado, handleLogin } = useContext(AuthContext)

  // VER SOBRE A SEGURANÇA E ROTAS AQUI NO APP
  return(
    <Router>
      <Navbar onSearch={setSearch} />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/home' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage onLogin={handleLogin}/>} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/books' element={<BooksPage search={search} />} />
          <Route path='/borrowed' element={
            <ProtectedRoute>
              <BorrowedPage />
            </ProtectedRoute>
          }/>
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/bookinfo/:id' element={<BookInfoPage />} />
          <Route path='/expiredbookinfo' element={<ExpiredBookInfoPage />} />
          <Route path='/downloadbookpage' element={<DownloadBookPage />} />
          <Route path='/reviewpayment/:id' element={<ReviewPaymentPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/notLogged' element={<UserNotLogged />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
