import "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const BorrowButton = ({ bookId }) => {
    
    return (
        <button>
            <Link to={`/reviewpayment/${bookId}`} className="bg-black text-white px-10 py-4 rounded font-bold text-3xl">
                Borrow
            </Link>
        </button>
    )
}

export default BorrowButton;