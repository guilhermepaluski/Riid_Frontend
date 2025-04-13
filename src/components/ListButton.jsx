import { useState } from "react";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["VISA", "MasterCard", "PayPal", "PIX"];

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={() => setIsOpen(!isOpen)} className="bg-black text-white px-5 py-2 rounded">
        Choose the payment method
      </button>

      {isOpen && (
        <ul style={{
          position: "absolute",
          marginTop: "0.5rem",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          listStyle: "none",
          padding: "0",
        }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
              }}
              onClick={() => {
                console.log(`Clicou em ${item}`);
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
