"use client";
import { RootState } from "@/lib/redux/store";
import React, { useEffect, useState } from "react";

import { Button } from "..";
import { addToCart } from "@/lib/redux/reducers/cart";
import { Product } from "@/constants/data";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import useGetCart from "@/commonHooks/useGetCart";

interface AddToCartProps {
  product: Product;
}

const AddToCartButtonPresenter = ({ product }: AddToCartProps) => {
  const { id } = product;
  // const [count, setCount] = useState(0);
  const { count, handleAdd, handleDecrease, handleIncrease } = useGetCart({
    id,
  });
  // make this a context.
  return (
    <div className="flex items-center justify-center">
      {" "}
      {count === 0 ? (
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleAdd(product);
          }}
          size="icon"
        >
          <ShoppingCart />
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleDecrease(id.toString());
            }}
          >
            <Minus className="h-2 w-2" />
          </Button>
          {count}
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleIncrease(id.toString());
            }}
          >
            <Plus className="h-2 w-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButtonPresenter;
