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
            const response = await api.get(`/Loan/myBooks/${id}`, {
                withCredentials: true // se o cookie de autenticação estiver sendo usado
            });
            setBook(true);
            } catch (err) {
            setError("Erro ao carregar livros.");
            } finally {
            setLoading(false);
            }
        };

            fetchLoans();
    }, []);

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

                    {/* DownloadButton */}
                    <div className="flex justify-start gap-25 items-center h-40">
                        <DownloadButton bookId={book.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadBookPage;