import "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useBooks from "../../hooks/useBooks";

const BooksPage = ({ search }) => {
  const [books] = useBooks(
      search === ""
        ? "http://localhost:5090/api/Book"
        : `http://localhost:5090/api/Book/${search}`
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <div className="flex justify-center items-center">
        <div>
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
    </div>
  );
};

export default BooksPage;

BooksPage.propTypes = {
  search: PropTypes.string.isRequired,
};