import "react";
import { Link } from 'react-router-dom';

const TrashButton = () => {
    return (
        <div>
            <button className="bg-white text-black px-15 py-4 rounded">
                    <Link to="/cart" className="flex items-center gap-5">
                        <img src="./images/trashbutton.png" className="w-20 hover:bg-red-500" alt="" />
                    </Link>
            </button>
        </div>
    )
}

export default TrashButton;