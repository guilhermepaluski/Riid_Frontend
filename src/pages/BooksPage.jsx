import "react";
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import useBooks from "../../hooks/useBooks";

const BooksPage = ({ search }) => {
  const [books] = useBooks(
      search === ""
        ? "http://localhost:5090/api/Book"
        : `http://localhost:5090/api/Book/${search}`
  );
  
  const [isOpen, setOpen] = useState(false)
  const navigate = useNavigate
  const menuRef = useRef()

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <div className="relative p-15">
        <button onClick={() => setOpen(!isOpen)} className="bg-black text-white px-4 py-2 rounded p-2">
           <b>Filter</b>
        </button>

        {isOpen && (
          <div className="absolute mt-2 w-24 bg-white text-black rounded-lg shadow-lg z-50">
              <Link to="/books/drama" className="block px-4 py-2 hover:bg-gray-100"onClick={() => setOpen(false)}>
                Drama
              </Link>
              <Link to="/books/romance" className="block px-4 py-2 hover:bg-gray-100"onClick={() => setOpen(false)}>
                Romance
              </Link>
              <Link to="/books/adventure" className="block px-4 py-2 hover:bg-gray-100"onClick={() => setOpen(false)}>
                Adventure
              </Link>
              <Link to="/books/comedy" className="block px-4 py-2 hover:bg-gray-100"onClick={() => setOpen(false)}>
                Comedy
              </Link>
              <Link to="/books/action" className="block px-4 py-2 hover:bg-gray-100"onClick={() => setOpen(false)}>
                Action
              </Link>
              <Link to="/books/fiction" className="block px-4 py-2 hover:bg-gray-100"onClick={() => setOpen(false)}>
                Fiction
              </Link>
              <Link to="/books/suspense" className="block px-4 py-2 hover:bg-gray-100"onClick={() => setOpen(false)}>
                Suspense
              </Link>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <div className="famous-book grid grid-cols-3 gap-8 p-8">
          {console.log(books.length)}
          {
            books.length === 1
              ? 
                <div>
                    <Link key={books[0].id} to={`/bookinfo/${books[0].id}`}>
                    <div>
                      <img src={books[0].image} alt={books[0].name} className="w-[275px] mr-4" />
                      <span className="font-bold">{books[0].name}</span>
                    </div>
                  </Link>
                </div>
              : 
                books.map((book) => (
                  <Link key={book.id} to={`/bookinfo/${book.id}`}>
                    <div>
                      <img src={book.image} alt={book.name} className="w-[275px] mr-4" />
                      <span className="font-bold">{book.name}</span>
                    </div>
                  </Link>
                ))  
            /*loading
              ? <span>Loading...</span>
              : 
              books.map((book) => (
                <Link key={book.id} to={`/bookinfo/${book.id}`}>
                  <div>
                    <img src={book.image} alt={book.name} className="w-[275px] mr-4" />
                    <span className="font-bold">{book.name}</span>
                  </div>
                </Link>
              ))*/
          }
        </div>
      </div>
    </div>
  );
};

export default BooksPage;

BooksPage.propTypes = {
  search: PropTypes.string.isRequired,
};