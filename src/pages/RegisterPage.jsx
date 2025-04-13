import "react";
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

      {/* Body */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-4 border-black p-8 w-96 text-center">
          <h2 className="text-2xl font-bold">Register</h2><br />
          <input type="email" placeholder="Email" className="text-white block w-full p-2 my-2 border bg-black" />
          <input type="password" placeholder="Password" className="text-white block w-full p-2 my-2 border bg-black" />
          <Link to="/login" className="hover:underline text-1xl font-regular mt-4">Already have an account? Click here.</Link><br />
          <div className="flex justify-center space-x-4 mt-4">
            <img src="./images/applelogo.png" alt="Apple" className="w-8" />
            <img src="./images/googlelogo.png" alt="Google" className="w-8" />
            <img src="./images/yahoologo.png" alt="Yahoo" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
