import "react";
import BorrowButton from "../components/BorrowButton";
import TrashButton from "../components/TrashButton";

const CartPage = () => {
    return (
    <div className="min-h-screen flex flex-col justify-between bg-amber-50">
        <div className="flex items-center gap-15 p-15">
            <img src="./images/cartriid.png" alt="" />
            <span className="font-bold text-5xl">
                You have $ items in the cart!
            </span>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex gap-10 p-15">
                <img src="./images/jogosvorazes.jpg" className="w-75" alt="" />

                <div className="flex flex-col gap-10">
                    <span className="font-bold text-4xl">
                        Jogos Vorazes
                    </span>
                    <div className="flex items-center">
                        <BorrowButton />
                        <TrashButton />
                    </div>
                </div>
            </div>
        </div>

    
    </div>
    )
}

export default CartPage;