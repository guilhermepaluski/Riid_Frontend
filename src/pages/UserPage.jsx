import "react";
import { Link } from "react-router-dom";

const UserPage = () => {
    const setLogado = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        setLogado(false);
    }

    return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div>
            <Link to="/login">
                <button onClick={handleLogout} className="bg-red-800 text-black px-3 py-1 rounded">
                    Sair
                </button>
            </Link>
        </div>
    </div>
    )
}

export default UserPage;