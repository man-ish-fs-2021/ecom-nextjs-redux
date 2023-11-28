import React from "react";
import { Button } from "..";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import CartButton from "./CartButton/CartButton";

const Navbar = () => {
  return (
    <div className="h-[60px] w-full bg-complementary flex items-center px-6 border-b">
      <div className="font-bold text-primary text-xl">
        <Link href="/">Store</Link>
      </div>
      <div className="flex px-4">
        <Button variant="ghost" className="font-extralight">
          Categories
        </Button>
        <Button variant="ghost" className="font-extralight">
          Explore
        </Button>
      </div>
      <CartButton />
    </div>
  );
};

export default Navbar;
