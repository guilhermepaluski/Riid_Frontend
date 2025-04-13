import "react";
import { Link } from 'react-router-dom';

const BorrowAgainButton = () => {
    return(
        <div>
            <button className="bg-black text-white px-10 py-4 rounded">
                <Link to="/reviewpayment" className="font-bold text-3xl">Borrow again</Link>
            </button>
        </div>
    )
}

export default BorrowAgainButton;