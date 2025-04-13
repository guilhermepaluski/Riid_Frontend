import "react";
import { Link } from 'react-router-dom';

const BooksPage = () => {
  return (
    
    <div className="min-h-screen flex flex-col justify-between bg-white">

      <div className="flex justify-center items-center min-h-screen">
        <div>
            {/* Books Images */}
            <div className="grid grid-cols-3 gap-15 p-30 justify-center">
              <Link to="/bookinfo">
              <div>
                  <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[275px] mr-35" />
                  <span className="font-bold">Cabeça Fria Coração Quente</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div> 
                <img src="./images/jogosvorazes.jpg" alt="Einstein" className="w-[275px] mr-35" />
                <span className="font-bold">Jogos Vorazes</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div>
                <img src="./images/asaventurasdocapitaocueca.jpg" alt="Einstein" className="w-[275px]" />
                <span className="font-bold">As Aventuras do Capitão Cueca</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div>
                <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[275px] mr-35" />
                <span className="font-bold">Cabeça Fria Coração Quente</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div> 
                <img src="./images/jogosvorazes.jpg" alt="Einstein" className="w-[275px] mr-35" />
                <span className="font-bold">Jogos Vorazes</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div>
                <img src="./images/asaventurasdocapitaocueca.jpg" alt="Einstein" className="w-[275px]" />
                <span className="font-bold">As Aventuras do Capitão Cueca</span>
              </div>
              </Link>

              <Link to="/bookinfo">
              <div>
                <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[275px] mr-35" />
                <span className="font-bold">Cabeça Fria Coração Quente</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div> 
                <img src="./images/jogosvorazes.jpg" alt="Einstein" className="w-[275px] mr-35" />
                <span className="font-bold">Jogos Vorazes</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div>
                <img src="./images/asaventurasdocapitaocueca.jpg" alt="Einstein" className="w-[275px]" />
                <span className="font-bold">As Aventuras do Capitão Cueca</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div>
                <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[275px] mr-35" />
                <span className="font-bold">Cabeça Fria Coração Quente</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div> 
                <img src="./images/jogosvorazes.jpg" alt="Einstein" className="w-[275px] mr-35" />
                <span className="font-bold">Jogos Vorazes</span>
              </div>
              </Link>
              <Link to="/bookinfo">
              <div>
                <img src="./images/asaventurasdocapitaocueca.jpg" alt="Einstein" className="w-[275px]" />
                <span className="font-bold">As Aventuras do Capitão Cueca</span>
              </div>
              </Link>
            </div>

            <div className='flex gap-15 p-15 justify-center'>
                <Link to="/books">1</Link>
                <Link to="/books/2">2</Link>
                <Link to="/books/3">3</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
