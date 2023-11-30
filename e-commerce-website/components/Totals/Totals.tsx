import React from "react";
import { Button, Price } from "..";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Totals = ({ price }: { price: number }) => {
  return (
    <div className="flex flex-col bg-complementary border-[1px] border-neutral-300 rounded-md p-4 items-center justify-center gap-2">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-3xl text-primary font-bold">Total price</p>{" "}
        <div className="text-2xl">
          <Price price={price} />
        </div>
      </div>
      <div className="">
        <Link href="/checkout">
          <Button variant="default" className="flex ">
            Checkout
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/">
          <Button variant="ghost" className="flex py-6">
            <ArrowBigLeft />
            Shop more!{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Totals;
