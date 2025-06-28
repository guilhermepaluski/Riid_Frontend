import "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const BorrowButton = ({ bookId }) => {
    
    return (
        <button>
            <Link to={`/reviewpayment/${bookId}`} className="bg-black text-white px-10 py-4 rounded-4xl font-bold text-3xl cursor-pointer">
                Borrow
            </Link>
        </button>
    )
}

export default BorrowButton;