import "react";
import { useEffect, useState } from "react";
import api from "../auth/api";
import { Link } from 'react-router-dom';

const BorrowedPage = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchLoans = async () => {
    try {
      const response = await api.get("/Loan/myBooks")
      setLoans(response.data);
    } catch (err) {
      setError("Erro ao carregar livros.");
    } finally {
      setLoading(false);
    }
  };

    fetchLoans();
  }, []);


  return (
    <div className="min-h-screen flex flex-col justify-between"  style={{ backgroundColor: 'rgb(243, 237, 233)' }}>

    <div className="flex justify-center font-bold text-9xl relative p-15">
        Borrowed
    </div>

    {loading && <p>Carregando...</p>}
    {error && <p>{error}</p>}

    {!loading && !error && (
      <>
        <div className="flex justify-start p-10">
          <span className="text-7xl font-bold">RECENTS</span>
        </div>

        <div className="grid grid-cols-3 gap-15 p-30 justify-center">
          {loans.map((loan, index) => (
            <div key={loan.id}>
              <Link to={`/downloadbookpage/${loan.id}`}>
                <img src={loan.book_Image} alt={loan.book_Name} className="w-[275px] mr-35"/>
                <span className="font-bold">{loan.book_Name}</span>
              </Link>
            </div>
          ))}
        </div>
      </>
    )}
    </div>
  );
};

export default BorrowedPage;
