import { Product } from "@/constants/data";
import Image from "next/image";
import React from "react";
import { AddToCartButtonPresenter, Button, Price, Rating } from "..";
import { Trash } from "lucide-react";


const CartProductCard = ({ product }: { product: Product }) => {
    const { image, title, price, rating } =
    product as Product;
  return (
    <div className="w-[600px] h-[200px] flex bg-complementary rounded-md border-[1px] border-neutral-300 p-4 box-border">
      <div className="relative w-1/3 h-full"><Image src={image} layout="fill" objectFit="contain" alt="img" /></div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start gap-4 px-4">
          <div title={title} className="text-primary font-bold h-[20px] overflow-hidden">{title}</div>
          <div><Rating rate={rating.rate} /></div>
          <div><Price price={price} /></div>
          <div><AddToCartButtonPresenter product={product} /></div>
        </div>
        {/* <div>
            <Button size='icon'> <Trash /></Button>
        </div> */}
      </div>
    </div>
  );
};

export default CartProductCard;
