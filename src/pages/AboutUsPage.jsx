import "react";

const AboutUsPage = () => {
  return (
    
    <div className="min-h-screen flex flex-col justify-between bg-white">

      {/* Text 1 */}
      <div className="flex justify-start h-100 text-9xl">
        <span>
          <b>
            START <br />
            RIIDING!
          </b>
        </span>
      </div>

      {/* Text 2 */}
      <div className="flex justify-start h-20 text-4xl">
        <span>
          Check out some news about us:
        </span>
      </div>

      {/* News */}
      <div className="grid grid-cols-3 gap-15">
        <div>
          <img src="./images/num1.jpg" alt="number1" />
          <span>Riid, famous for containing a vast amount of books, is receiving the 1st place award in the Innovation category at the Festival of the Best Companies in the World.</span>
        </div>

        <div>
          <img src="./images/billgates.jpg" alt="billgates" />
          <span>“World’s biggest library we’ve known.”, says Bill Gates about ‘Riid’, the newest online library available.</span>
        </div>

        <div>
          <img src="./images/Raphinha.webp" alt="raphinha" />
          <span>“I’m sure people will start reading more after use this platform.”, Raphinha on ‘Riid’ as the biggest online library in the world.</span>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUsPage;
