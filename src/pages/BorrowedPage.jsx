import "react";
import { Link } from 'react-router-dom';

const BorrowedPage = () => {
  return (
    
    <div className="min-h-screen flex flex-col justify-between bg-white">

    {/* Lent counter */}
    <div className="flex justify-center p-15">
        <span className="text-3xl font-bold leading-15">
            You have already lent ${} books!
        </span>
    </div>

      <div className="flex justify-center items-center min-h-screen">
        <div>
            
            {/* RECENTS */}
            <div className="flex justify-start">
              <span className="text-5xl font-bold">
                  RECENTS
              </span>
            </div>

            {/* Books Images RECENTS */}
            <div className="grid grid-cols-3 gap-15 p-30 justify-center">

              <div>
                <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[275px] mr-35" />
                <span className="font-bold">Cabeça Fria Coração Quente</span>
              </div>
              <div> 
                <img src="./images/jogosvorazes.jpg" alt="Einstein" className="w-[275px] mr-35" />
                <span className="font-bold">Jogos Vorazes</span>
              </div>
              <div>
                <img src="./images/asaventurasdocapitaocueca.jpg" alt="Einstein" className="w-[275px]" />
                <span className="font-bold">As Aventuras do Capitão Cueca</span>
              </div>  
              </div>

            {/* SOME TIME AGO... */}
              <div className="flex justify-start">
                  <span className="text-5xl font-bold">
                    SOME TIME AGO...
                  </span>
              </div>

            {/* Books Images SOME TIME AGO */}
            <div className="grid grid-cols-3 gap-15 p-30 justify-center">
              <div>
                <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[275px] mr-35" />
                <span className="font-bold">Cabeça Fria Coração Quente</span>
              </div>
              <div> 
                <img src="./images/jogosvorazes.jpg" alt="Einstein" className="w-[275px] mr-35" />
                <span className="font-bold">Jogos Vorazes</span>
              </div>
              
              {/* CADIADO */}
              <Link to="/expiredbookinfo">
              <div>
                <img src="./images/cadiadoasaventurasdocapitaocueca.jpg" alt="Einstein" className="w-[275px]" />
                <span className="font-bold">As Aventuras do Capitão Cueca</span>
              </div>
              </Link>
              
              <div>
                <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[275px] mr-35" />
                <span className="font-bold">Cabeça Fria Coração Quente</span>
              </div>
              <div> 
                <img src="./images/jogosvorazes.jpg" alt="Einstein" className="w-[275px] mr-35" />
                <span className="font-bold">Jogos Vorazes</span>
              </div>
              <div>
                <img src="./images/asaventurasdocapitaocueca.jpg" alt="Einstein" className="w-[275px]" />
                <span className="font-bold">As Aventuras do Capitão Cueca</span>
              </div>  
              <div>
                <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[275px] mr-35" />
                <span className="font-bold">Cabeça Fria Coração Quente</span>
              </div>
              <div> 
                <img src="./images/jogosvorazes.jpg" alt="Einstein" className="w-[275px] mr-35" />
                <span className="font-bold">Jogos Vorazes</span>
              </div>
              <div>
                <img src="./images/asaventurasdocapitaocueca.jpg" alt="Einstein" className="w-[275px]" />
                <span className="font-bold">As Aventuras do Capitão Cueca</span>
              </div>  
            </div>

            <div className='flex p-15 gap-15 justify-center'>
                <Link to="/books">1</Link>
                <Link to="/books/2">2</Link>
                <Link to="/books/3">3</Link>
            </div>
            </div>
        </div>
      </div>
  );
};

export default BorrowedPage;
