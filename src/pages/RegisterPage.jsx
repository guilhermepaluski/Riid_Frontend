import "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import api from "../auth/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorMessages = []
  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    try{
      await api.post("/auth/register", {
        name,
        email,
        password
      });
      alert('Cadastro realizado com sucesso!');
      navigate("/login");
    }catch(error){
      console.log(error.response.data)
      error.response.data.forEach(element => {
        errorMessages.push(element.description)
      });
      errorMessages.forEach(error=> {
          alert(error);
      });
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

      {/* Body */}
      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleRegister} className="border-4 border-black p-8 w-96 text-center">
          <h2 className="text-3xl font-bold">Register</h2><br />
          
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="text-white block w-full p-2 my-2 border bg-black" />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="text-white block w-full p-2 my-2 border bg-black" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="text-white block w-full p-2 my-2 border bg-black" />
          
          <button
            type="submit"
            className="mt-4 bg-black text-white px-4 py-2 w-30 rounded-md"
          >
            Register
          </button>

          <div className="mt-4">
            <Link to="/login" className="hover:underline">Already have an account? <b>Click here</b>.</Link><br />
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

export default RegisterPage;
