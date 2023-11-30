import { DollarSign } from "lucide-react";
import React from "react";

interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  return (
    <div className="flex items-center">
      <DollarSign className="text-xs h-4" /> {price.toFixed(2)}
    </div>
  );
};

export default Price;
