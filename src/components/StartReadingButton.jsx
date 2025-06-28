import "react";
import { Link } from "react-router-dom";

const StartReadingButton = () => {
    return (
        <div className="text-black text-center flex-1">
          <Link to="/books">
            <button className="bg-black text-white text-3xl font-bold rounded-4xl px-14 py-4 cursor-pointer">
              Start reading
            </button>
          </Link>
        </div>
    )
}

export default StartReadingButton;