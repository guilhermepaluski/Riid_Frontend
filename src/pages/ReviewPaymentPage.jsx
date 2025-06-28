import "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import api from "../auth/api";

const ReviewPaymentPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
  axios.get(`http://localhost:5090/api/Book/${id}`)
  .then(res => setBook(res.data))
  .catch(err => console.error('Erro ao carregar livro:', err));
  }, [id]);

  const handlePayment = async () => {

    try{
      const response = await api.post('/Loan', {
        fk_book: id
      })
    }catch(error){
      console.log(`Error: ${error}`)
    }

    setShowPopup(true);
  };

  const closePopup = async () => {
    try {
      const response = await fetch(`http://localhost:5090/api/BookPdf/download/${id}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer o download do PDF.');
      }

  } catch (error) {
    console.error('Erro:', error);
  }
    setShowPopup(false);
  };

  if (!book) {
  return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: 'rgb(243, 237, 233)' }} >
      <div className="flex p-10 gap-10">
        {/* BookImage */}
          <div> 
            <img src= { book.image } alt={book.image} className="w-[400px] mr-35" />
          </div>

        {/* Book Infos */}
        <div className="flex flex-col gap-6 max-w-xl w-full">
          <span className="font-bold text-5xl">Lent Review</span>

          {/* Title */}
          <div className="text-2xl">
            <h1>1x - { book.name }</h1>
          </div>

           {/* Botão de pagamento */}
           <button onClick={handlePayment} className="bg-black text-white text-3xl font-bold py-4 px-4 rounded-4xl hover:bg-gray-800 transition cursor-pointer">
            Confirm Lent 
          </button>

          {/* Popup de confirmação */}
            {showPopup && (
                <div className="fixed inset-0 bg-black opacity-75 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded shadow-xl max-w-md text-center space-y-4">
                      <h2 className="text-2xl font-bold text-green-700">Lent Complete!</h2>
                      <p>
                      Your lent is complete! You can close this window and start reading your book now.
                      </p>
                      <Link to="/borrowed">
                        <button onClick={closePopup} className="mt-4 px-4 py-2 bg-black text-white rounded-4xl hover:bg-red-900 transition cursor-pointer">
                            Close
                        </button>
                      </Link>
                  </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPaymentPage;
