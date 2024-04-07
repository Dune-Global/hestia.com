import React, { useState } from "react";

interface PriceInputProps {
  onPriceChange: (price: number) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ onPriceChange }) => {
  const [price, setPrice] = useState<string>("");

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPrice = event.target.value;
    // Check if input is a valid number
    if (!isNaN(parseFloat(inputPrice)) && isFinite(parseFloat(inputPrice))) {
      setPrice(inputPrice);
      onPriceChange(parseFloat(inputPrice));
    } else {
      // Clear price if input is not a valid number
      setPrice("");
      onPriceChange(0);
    }
  };

  return (
    <div>
      <input
        id="price"
        type="number"
        className="mt-1 p-4 border border-gray-300 rounded-md w-full"
        placeholder="Enter price"
        value={price}
        onChange={handlePriceChange}
      />
    </div>
  );
};

export default PriceInput;
