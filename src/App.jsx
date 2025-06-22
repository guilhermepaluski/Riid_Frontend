import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import UserPage from './pages/UserPage';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthProvider } from './contexts/AuthContext';
import { jwtDecode } from 'jwt-decode';
import UserNotLogged from './pages/UserNotLogged';

function App() {
  const [search, setSearch] = useState("");
  const [logado, setLogado] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => setLogado(true);
  
  const isTokenValid = (token) => {
    try {
      const { exp } = jwtDecode(token);
      const now = Date.now / 60000;
      exp < now ? false : true
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    // ERRO NO TOKEN
    if (token && isTokenValid(token)){
      setLogado(true);
    } else {
      setLogado(false);
    }
  }, [])
  console.log(`Logado?: ${logado}`);

  // VER SOBRE A SEGURANÇA E ROTAS AQUI NO APP
  return(
    <AuthProvider>
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
              logado ? <BorrowedPage /> : <Navigate to={"/notLogged"}/>
            } 
            />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/bookinfo/:id' element={<BookInfoPage />} />
            <Route path='/expiredbookinfo' element={<ExpiredBookInfoPage />} />
            <Route path='/reviewpayment/:id' element={<ReviewPaymentPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/notLogged' element={<UserNotLogged />} />
          </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
