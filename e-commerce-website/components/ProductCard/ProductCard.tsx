import { Product } from "@/constants/data";
import Image from "next/image";
import React from "react";
import { Button, Price } from "..";
import { DollarSign, Star } from "lucide-react";
import Link from "next/link";
import AddToCartButtonPresenter from "../AddToCartButtonPresenter/AddToCartButtonPresenter";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const { image, title, category, rating, price, id } = data;
  return (
    <Link href={`/products/${id}`}>
      <div className="bg-complementary p-2 flex flex-col h-[350px] w-[200px] rounded-md border-neutral-700 border-[0.5px]  items-center justify-start box-border hover:shadow-lg transition-all">
        <div className=" hover:shadow-md hover:cursor-pointer transition-all p-1 h-[175px] w-[90%] overflow-hidden object-fill bg-white flex items-center justify-center border-[0.5px] border-neutral-300  rounded-md flex-shrink-0">
          <Image width={100} height={150} src={image} alt="product-img" />
        </div>
        <div className="flex w-full pt-2 justify-between items-baseline">
          <div className="text-ellipsis overflow-hidden max-h-[120px] w-[70%]">
            <h1
              title={title}
              className="text-ellipsis  font-semibold overflow-hidden max-h-[70px] text-s"
            >
              {title}
            </h1>
            <h2 className="text-xs italic py-1">{category}</h2>
          </div>
          <div className="flex items-center">
            <Star className="h-4" />
            <div>{rating.rate}</div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between pt-2 mt-auto">
          <Price price={price} />
          <div>
            <AddToCartButtonPresenter key={id} product={data} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
