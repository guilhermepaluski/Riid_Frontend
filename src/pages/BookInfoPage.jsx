import "react";
import BorrowButton from "../components/BorrowButton";
import AddToCartButton from "../components/AddToCartButton";

const BookInfoPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">

            <div className="flex p-15 min-h-screen">
                {/* BookImage */}
                <div> 
                    <img src= { book.image } alt="" className="w-[400px] mr-35" />
                </div>

                {/* Book Infos */}
                <div className="space-y-4">
                    <span className="flex font-bold text-6xl">
                        As Aventuras do Capitão Cueca
                    </span>
                    <span className="flex font-bold text-2xl">
                    </span>

                    {/* StarPNG */}
                    <div className="flex gap-2">
                        <span className="text-4xl">
                            4.9
                        </span>
                        <img src="/images/starpng.png" className="w-10 justify-center" alt="" />
                        <img src="/images/starpng.png" className="w-10" alt="" />
                        <img src="/images/starpng.png" className="w-10" alt="" />
                        <img src="/images/starpng.png" className="w-10" alt="" />
                        <img src="/images/starpng.png" className="w-10" alt="" />
                    </div>

                    {/* BorrowButton + AddToCartButton */}
                    <div className="flex justify-start gap-25 items-center h-40">
                        <BorrowButton />
                        <AddToCartButton />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookInfoPage;