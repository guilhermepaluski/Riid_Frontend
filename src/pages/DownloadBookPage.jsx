import "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DownloadButton from "../components/DownloadButton";
import api from "../auth/api";

const DownloadBookPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await api.get(`/Loan/myBooks/${id}`)
                setBook(response.data);
            } catch (err) {
                setError("Erro ao carregar livros.");
            }
        };

            fetchLoans();
    }, []);

    const handleDownloadBook = async () => {
        try {
            const response = await api.get(`BookPdf/download/${id}`, {
                responseType: 'blob'
            });

            const blobUrl = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));

            window.open(blobUrl, '_blank');
        } catch (err) {
            console.error("Erro ao abrir o PDF:", err);
            setError("Erro ao abrir o PDF");
        }
    };

    if (!book) return <div className="p-8">Carregando...</div>;

    return (
        <div className="min-h-screen flex w-full" style={{ backgroundColor: 'rgb(243, 237, 233)' }}>

            <div className="flex p-15 min-h-screen">
                {/* BookImage */}
                <div className="w-1/3"> 
                    <img src= { book.book_Image } alt={book.image} className="w-[400px] shadow-2xl" />
                </div>

                {/* Book Infos */}
                <div className="space-y-4 w-2/3 flex-col justify-center items-center">
                    
                    {/* Title */}
                    <div className="text-4xl font-bold">
                        <h1>{ book.book_Name }</h1>
                    </div>

                    <div className="text-2xl">
                        <h2>{ `Author: ${book.book_Author}` }</h2>
                    </div>

                    {/* Description*/}
                    <div className="text-2xl">
                        <h2>{ `Category: ${book.book_Category}` }</h2>
                    </div>

                    <div className="text-sm">
                        <h2>{book.book_Description}</h2>
                    </div>

                    {/* DownloadButton */}
                    <div className="flex justify-start gap-25 items-center h-40">
                        <DownloadButton handleClick={handleDownloadBook} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadBookPage;