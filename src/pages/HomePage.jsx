import "react";
import CarouselHorizontalLoop from "../components/Carousel";

const HomePage = () => {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-white">

        {/* Body */}
        <div className="flex justify-center items-center p-15 bg-black">
            {/* Text */}
            <div className="w-0.5 text-white text-left flex-1 p-15">
              <span className="text-5xl font-bold leading-15">
                <b>“If you live your life without
                    reading, <br />you will be lived
                    one life.
                </b>
              </span>
              <br />
              <span className="text-5xl font-bold leading-15">
                <b>But if you live your life
                    reading, you <br />will be lived
                    5000 lives.”
                </b>
              </span>
            </div>

            {/* Einstein Image */}
            <div className="p-5">
              <img src="./images/einstein-riid.png" alt="Einstein" className="w-140 h-full" />
            </div>
        </div>

        <div>
          <CarouselHorizontalLoop />
        </div>

        {/* Month Best Ones! */}
        <div>
          <div className="text-black text-center flex-1 p-15">
            <span className="text-5xl font-bold leading">
              <br />
              <b>MONTH BEST ONES!</b>
              <br />
              <br />
            </span>

            {/* Books Images */}
            <div className="flex justify-center p-15">
                <img src="./images/cabecafria.jpg" alt="abel ferreira" className="w-[350px] mr-35" />
                <img src="./images/jogosvorazes.jpg" alt="jogos vorazes" className="w-[350px] mr-35" />
                <img src="./images/asaventurasdocapitaocueca.jpg" alt="capitao cueca" className="w-[350px]" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomePage;