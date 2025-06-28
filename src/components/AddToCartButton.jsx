import "react";
import { Link } from 'react-router-dom';

const AddToCartButton = () => {
    return (
        <div>
            <button className="text-black px-15 py-4 rounded">
                    <Link to="/cart" className="flex items-center gap-5 font-bold text-3xl">
                        <img src="/images/cartriid.png" className="w-20" alt="" />
                        Add to cart
                    </Link>
            </button>
        </div>
    )
}

export default AddToCartButton;