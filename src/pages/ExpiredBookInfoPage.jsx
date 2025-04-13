import "react";
import BorrowAgainButton from "../components/BorrowAgainButton";
import AddToCartButton from "../components/AddToCartButton";

const ExpiredBookInfoPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">

            <div className="flex p-15 min-h-screen">
                {/* BookImage */}
                <div> 
                    <img src="./images/asaventurasdocapitaocueca.jpg" alt="JogosVorazes" className="w-[400px] mr-35" />
                </div>

                {/* Book Infos */}
                <div className="space-y-4 p-15">
                    <span className="flex font-bold text-6xl">
                        As Aventuras do Capitão Cueca
                    </span>
                    <span className="flex font-bold text-2xl">
                        <br />
                        A bald teacher, hated by almost all his students, starts to feel like a superhero and needs to win the monster that appeared to destroy the school.
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

                    {/* BorrowAgainButton + AddToCartButton */}
                    <div className="flex justify-start gap-25 items-center h-40">
                        <BorrowAgainButton />
                        <AddToCartButton />
                    </div>

                    <div className="flex items-center gap-4">
                        <img src="./images/cadiado.png" className="w-10" alt="" />
                        <span className="font-bold text-2xl">
                            Your time expired! <br />
                            Borrow again to continue using it.
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ExpiredBookInfoPage;