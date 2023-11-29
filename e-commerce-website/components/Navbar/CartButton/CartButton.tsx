"use client";
import useGetCart from "@/commonHooks/useGetCart";
import { Button } from "@/components";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartButton = () => {
  const { totalCount } = useGetCart({
    id: null,
  });
  return (
    <div className="ml-auto pr-4 flex items-center hover:cursor-pointer">
      <Link href="/cart">
        <Button size="icon">
          <div className="flex items-center justify-center h-full">
            <ShoppingCart className="h-5" />{" "}
            <div className="text-xs">{totalCount}</div>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default CartButton;
