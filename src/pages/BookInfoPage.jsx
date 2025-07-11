import "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BorrowButton from "../components/BorrowButton";
import axios from 'axios';

const BookInfoPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5090/api/Book/${id}`)
        .then(res => setBook(res.data))
        .catch(err => console.error(err));
    }, [id]);

    if (!book) return <div className="p-8">Carregando...</div>;

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'rgb(243, 237, 233)' }}>

            <div className="flex p-15 min-h-screen">
                {/* BookImage */}
                <div> 
                    <img src= { book.image } alt={book.image} className="w-[400px] mr-35 shadow-2xl" />
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

                    {/* BorrowButton */}
                    <div className="flex justify-start gap-25 items-center h-40">
                        <BorrowButton bookId={book.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInfoPage;