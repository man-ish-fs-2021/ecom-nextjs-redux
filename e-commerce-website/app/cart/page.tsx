"use client";
import useGetCart from "@/commonHooks/useGetCart";
import { Button, CartProductCard, Totals } from "@/components";
import _ from "lodash";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  const { allCartItems ,totalPrice } = useGetCart({ id: null });

  return (
    <div className="w-full h-full ">
        <div><h1 className="text-3xl p-2 font-bold text-primary">Your Cart:</h1></div>

      <div className="h-full flex w-full py-3 ">
        {_.isEmpty(allCartItems) ? (
          <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="flex text-5xl font-bold text-primary">
              Your cart is Empty!
            </div>
            <div>
              <Link href="/">
                <Button variant="ghost" className="flex py-6">
                  <ArrowBigLeft />
                  Go back{" "}
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="h-full flex flex-col w-2/3 overflow-y-scroll gap-4 items-center">
              {allCartItems.map((each) => (
                <CartProductCard product={each} />
              ))}
            </div>
            <div className="h-full w-1/3"><Totals  price={totalPrice}/></div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
