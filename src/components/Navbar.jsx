import "react";
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
    const logado = !!localStorage.getItem("token")
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsOpen(false);
        navigate("/login");
    };

    return (
        <div className="flex flex-col justify-between bg-black">
            {/* Navbar */}
            <nav className="bg-black text-white p-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    <img src="./images/riidlogo.png" className="w-50" alt="" />
                </Link>
                <div className="flex space-x-50">
                    <Link to="/books" className="">Books</Link>
                    <Link to="/borrowed" className="">Borrowed</Link>
                    <Link to="/aboutus" className="">About us</Link>

                    <div>
                        <SearchBar onSearch={onSearch} />
                    </div>
                    
                    <div className="flex">
                        <div className="flex gap-5">
                            <Link to="/cart">
                                <img src="./images/cartriid2.png" className="w-10" alt="" />
                            </Link>

                            {/* User Icon/Sign in/Sign up */}
                            <div ref={menuRef} className="relative">
                                {logado ? (
                                    <>
                                        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                                            <img src="./images/usericonpng.png" className="w-9" alt="" />
                                        </button>

                                        {isOpen && (
                                            <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded-lg shadow-lg z-50">
                                                <Link to="/user" className="text-center block px-4 py-2 hover:bg-gray-100 rounded-t-lg"onClick={() => setIsOpen(false)}>
                                                    Account
                                                </Link>

                                                <Link to="/settings" className="text-center block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                                                    Settings
                                                </Link>
                                                
                                                <button onClick={handleLogout} className="text-center w-full px-4 py-2 hover:bg-red-900 hover:text-white rounded-b-lg cursor-pointer">
                                                    Exit
                                                </button>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                        <>
                                            <button className="bg-black text-white px-3 py-1 rounded">
                                                <Link to="/login" className="">Sign in</Link>
                                            </button>
                                            <button className="bg-white text-black px-3 py-1 rounded">
                                                <Link to="/register" className="">Sign up</Link>
                                            </button>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};