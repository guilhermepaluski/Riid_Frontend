import "react";
import React, { useState } from "react";
import DropdownButton from "../components/ListButton";

const ReviewPaymentPage = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    const handlePayment = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div className="flex p-10 gap-10">
        {/* BookImage */}
        <div>
          <img
            src="./images/asaventurasdocapitaocueca.jpg"
            alt="As Aventuras do Capitão Cueca"
            className="w-[300px] rounded shadow"
          />
        </div>

        {/* Book Infos */}
        <div className="flex flex-col gap-6 max-w-xl w-full">
          <span className="font-bold text-6xl">Payment Review</span>

          <span className="font-bold text-2xl">
            1x - As Aventuras do Capitão Cueca
          </span>

          <DropdownButton />

          {/* Card's Name */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-2xl">Card's Name</label>
            <input
              type="text"
              placeholder="Type your card's name"
              className="px-4 py-2 rounded bg-gray-300 text-left"
            />
          </div>

          {/* Card's Number */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-2xl">Card's Number</label>
            <input
              type="text"
              placeholder="Type your card's number"
              className="px-4 py-2 rounded bg-gray-300 text-left"
            />
          </div>

          {/* CVV + Valid Date */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 w-1/2">
              <label className="font-bold text-2xl">CVV</label>
              <input
                type="number"
                placeholder="Type your CVV"
                className="px-4 py-2 rounded bg-gray-300 text-left"
              />
            </div>

            <div className="flex flex-col gap-1 w-1/2">
              <label className="font-bold text-2xl">Valid Date</label>
              <input
                type="date"
                className="px-4 py-2 rounded bg-gray-300 text-left"
              />
            </div>
          </div>

           {/* Botão de pagamento */}
           <button onClick={handlePayment} className="bg-black text-white font-bold py-4 px-4 rounded hover:bg-gray-800 transition">
            CONFIRM PAYMENT
          </button>

          {/* 🔔 Popup de confirmação */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded shadow-xl max-w-md text-center space-y-4">
                    <h2 className="text-2xl font-bold text-green-700">Payment Complete</h2>
                    <p>
                    Your payment is complete! You can close this window and start reading your book now.
                    </p>
                    <button
                    onClick={closePopup}
                    className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-green-700 transition"
                    >
                    Close
                    </button>
                </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPaymentPage;
