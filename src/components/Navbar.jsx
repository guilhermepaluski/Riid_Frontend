import "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
    return (
        <div className="flex flex-col justify-between bg-black">
            {/* Navbar */}
            <nav className="bg-black text-white p-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">RIID</Link>
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
                            <div>
                                <button className="bg-black text-white px-3 py-1 rounded">
                                    <Link to="/login" className="">Sign in</Link>
                                </button>
                                <button className="bg-white text-black px-3 py-1 rounded">
                                    <Link to="/register" className="">Sign up</Link>
                                </button>
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