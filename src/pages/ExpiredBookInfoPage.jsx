import "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BorrowButton from "../components/BorrowButton";
import AddToCartButton from "../components/AddToCartButton";
import axios from 'axios';

const ExpiredBookInfoPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5090/api/Book/${id}`)
        .then(res => setBook(res.data))
        .catch(err => console.error(err));
    }, [id]);

    if (!book) return <div className="p-8">Carregando...</div>;

    return (
        <div className="min-h-screen flex flex-col bg-white">

            <div className="flex p-15 min-h-screen">
                {/* BookImage */}
                <div> 
                    <img src= { book.image } alt={book.image} className="w-[400px] mr-35" />
                </div>

                {/* Book Infos */}
                <div className="space-y-4">
                    
                    {/* Title */}
                    <div className="text-4xl font-bold">
                        <h1>{ book.name }</h1>
                    </div>

                    {/* Description 
                    <div className="text-2xl">
                        <h1>{ book.category }</h1>
                    </div>
                    */}

                    {/* StarPNG */}
                    <div className="flex gap-2">
                        <span className="text-2xl">
                            4.9
                        </span>
                        <img src="/images/starpng.png" className="w-8 h-8 justify-center" alt="" />
                        <img src="/images/starpng.png" className="w-8 h-8" alt="" />
                        <img src="/images/starpng.png" className="w-8 h-8" alt="" />
                        <img src="/images/starpng.png" className="w-8 h-8" alt="" />
                        <img src="/images/starpng.png" className="w-8 h-8" alt="" />
                    </div>

                    {/* BorrowButton + AddToCartButton */}
                    <div className="flex justify-start gap-25 items-center h-40">
                        <BorrowButton bookId={book.id} />
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