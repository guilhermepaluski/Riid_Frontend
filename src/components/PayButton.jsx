import "react";
import { Link } from 'react-router-dom';

const PayButton = () => {
    return(
        <div>
            <button className="bg-black text-white px-10 py-4 rounded">
                <Link to="/paymentcomplete" className="font-bold text-3xl">Pay</Link>
            </button>
        </div>
    )
}

export default PayButton;