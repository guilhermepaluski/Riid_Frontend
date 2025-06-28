import "react";
import { Link } from 'react-router-dom';

const BorrowButton = ({ bookId }) => {
    return (
        <div>
            <Link to={`/reviewpayment/${bookId}`} className="bg-black text-white px-10 py-4 rounded-4xl font-bold text-3xl cursor-pointer">
                Borrow
            </Link>
        </div>
    )
}

export default BorrowButton;