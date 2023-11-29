import { Price, ProductCard, Rating } from "@/components";
import AddToCartButtonPresenter from "@/components/AddToCartButtonPresenter/AddToCartButtonPresenter";
import { Product } from "@/constants/data";
import Image from "next/image";
import React from "react";
interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = async (id: string) => {
  try {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await resp.json();
    return data as Product;
  } catch (err) {
    console.log({ err });
  }
};
const getRelatedProducts = async (category: string) => {
  try {
    const resp = await fetch(
      `https://fakestoreapi.com/products/category/${category}?limit=5`
    );
    const data = await resp.json();
    return data as Product[];
  } catch (err) {
    console.log({ err });
  }
};
const getFilteredSuggestions = (products: Product[], id: string) => {
  return products.filter((each) => each.id.toString() !== id);
};
const page = async ({ params }: ProductPageProps) => {
  const { id } = params;
  const [product] = await Promise.all([getProduct(id)]);
  const { image, title, price, description, rating, category } =
    product as Product;
  const [related] = await Promise.all([getRelatedProducts(category)]);
  const toDisplayRelated = getFilteredSuggestions(related || [], id);
  console.log({ related });
  return (
    <div className="w-full h-full flex flex-col pl-2 p-5">
      <div className="w-full h-3/5 relative flex">
        <div className="h-full relative w-1/3 max-w-1/3 rounded-md border-neutral-700 border-[0.5px]">
          <Image
            layout="fill"
            objectFit="contain"
            src={image}
            alt="product-img"
          />
        </div>
        <div className=" w-2/3 h-full overflow-scroll flex flex-col gap-6 items-start pl-4">
          <div>
            <h1 className="text-4xl text-primary font-black">{title}</h1>
          </div>
          <div className="text-2xl">
            <Price price={price} />
          </div>
          <div className="text-2xl">
            <Rating rate={rating.rate} />
          </div>
          <div className="w-full capitalize">
            <p>{description}</p>
          </div>
          <div>
            <AddToCartButtonPresenter product={product as Product} />
          </div>
        </div>
      </div>
      <div className="w-full h-2/5 pt-4">
        <div>
          <p className="text-3xl font-bold capitalize">Related in {category}</p>
        </div>
        <div className="flex gap-4 py-2">
          {toDisplayRelated?.map((item) => (
            <ProductCard data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
