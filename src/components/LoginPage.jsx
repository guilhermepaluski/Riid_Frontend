import "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Navbar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">RIID</div>
        <div className="flex space-x-5">
          <a href="#" className="">About us</a>
          <a href="#" className="">Books</a>
          <a href="#" className="">Borrowed</a>
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 rounded"
          />
          <button className="bg-black text-white px-3 py-1 rounded">Sign in</button>
          <button className="bg-white text-black px-3 py-1 rounded">Sign up</button>
        </div>
      </nav>

      {/* Body */}
      <div className="flex justify-center">
        <div className="border-4 border-black p-8 w-96 text-center">
          <h2 className="text-2xl font-bold">Login</h2><br />
          <input type="email" placeholder="Email" className="text-white block w-full p-2 my-2 border bg-black" />
          <input type="password" placeholder="Password" className="text-white block w-full p-2 my-2 border bg-black" />
          <div className="flex justify-center space-x-4 mt-4">
            <img src="./images/applelogo.png" alt="Apple" className="w-8" />
            <img src="./images/googlelogo.png" alt="Google" className="w-8" />
            <img src="./images/yahoologo.png" alt="Yahoo" className="w-8" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-6 text-left text-sm">
      <div className="text-2xl font-bold">RIID</div><br />
        <div className="grid grid-cols-3 gap-1">
          <div>
            <a href="#" className="">About us</a><br />
            <a href="#" className="">Founders</a><br />
            <a href="#" className="">+55 (47) 0000-0000</a><br />
          </div>
          <div>
            <a href="#" className="">Books</a><br />
            <a href="#" className="">Borrowed</a><br />
            <a href="#" className="">Account</a><br />
          </div>
          <div>
            <a href="#" className="">Help</a><br />
            <a href="#" className="">Contact team</a><br />
            <a href="#" className="">Feedbacks</a><br />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
