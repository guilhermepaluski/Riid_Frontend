import "react";
import { Link } from 'react-router-dom';
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5090/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // armazena token
      alert('Login realizado com sucesso!');
    } catch (error) {
      alert('Erro: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

      {/* Body */}
      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleLogin} className="border-4 border-black p-8 w-96 text-center">
          <h2 className="text-3xl font-bold">Login</h2><br />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="text-white block w-full p-2 my-2 border bg-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="text-white block w-full p-2 my-2 border bg-black"
          />

          <button
            type="submit"
            className="mt-4 bg-black text-white px-4 py-2 w-30 rounded-md"
          >
            Login
          </button>

          <div className="mt-4">
            <Link to="/register" className="hover:underline">First access? <b>Click here</b>.</Link>
          </div>

          <div className="flex justify-center space-x-12 mt-4">
            <img src="./images/applelogo.png" alt="Apple" className="w-8" />
            <img src="./images/googlelogo.png" alt="Google" className="w-9" />
            <img src="./images/microsoftlogo.png" alt="Microsoft" className="w-9" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
