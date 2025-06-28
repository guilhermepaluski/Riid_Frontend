import "react";
import { Link } from "react-router-dom"
import CarouselHorizontalLoop from "../components/Carousel";
import StartReadingButton from "../components/StartReadingButton";

const HomePage = () => {
    return (
      <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: 'rgb(243, 237, 233)' }} >

        {/* Body */}
        <div className="flex justify-center items-center p-15 bg-black">
            {/* Text */}
              <img src=".\images\quoteshomepage.png" alt="" className="w-70" />
            <div className="w-0.5 text-white text-left flex-1 p-15">
              <span className="text-5xl font-bold leading-15">
                <b>If you live your life without
                    reading, <br />you will be lived
                    one life.
                </b>
              </span>
              <br />
              <span className="text-5xl font-bold leading-15">
                <b>But if you live your life
                    reading, you <br />will be lived
                    5000 lives.
                </b>
              </span>
            </div>

            {/* Home Page Image */}
            <div className="p-5">
              <img src="public\images\homepagedrawbook.png" alt="HomePageImage" className="w-140 h-full" />
            </div>
        </div>

        {/* Carousel Button */}        
        <CarouselHorizontalLoop />

        <div className="flex justify-center p-15">
          <div className="text-black text-center flex-1 p-35 rotate-12">
            <img src=".\images\diariodeumbananalivro.jpg" alt="" className="w-100 shadow-2xl" />
          </div>

          <div className="text-black text-center flex-1 p-15 -rotate-12">
            <img src=".\images\mondsetbook.jpg" alt="" className="w-100 shadow-2xl" />
          </div>

          <div className="text-black text-center flex-1 p-45 -rotate-6">
            <img src=".\images\jogosvorazes.jpg" alt="" className="w-100 shadow-2xl" />
          </div>
        </div>

        {/* Start Reading Button */}
        <StartReadingButton />

      <div className="flex text-2xl">
        <div className="p-15">
          <img src=".\images\mountedbooks.png" alt="" className="h-full w-125" />
        </div>
        
        <div className="flex justify-center items-center p-35">
        ’’Discover a billion stories and practice your capacity of imaging scenarios and characters <br /> while you drink some coffee.
        Let each page take you to a new world, where every sip <br /> turns into a journey and every chapter becomes a memory. Whether you're exploring <br />
        distant galaxies, walking through medieval castles, or simply diving into someone else's <br />
        thoughts, books have the power to expand your mind and touch your soul. In a world full <br />
        of distractions, take a moment for yourself — and let the stories live through you.’’
        </div>
      </div>


      </div>
    );
};

export default HomePage;