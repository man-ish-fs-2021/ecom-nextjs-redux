import { Product } from "@/constants/data";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";
import { addToCart, decreaseQty, increaseQty } from "@/lib/redux/reducers/cart";
import { RootState } from "@/lib/redux/store";
import _ from "lodash";
import React from "react";

interface GetCartProps {
  id: string | number | null;
}
const getTotalCount = (cart: { [id: string]: Product }) => {
  let count = 0;
  _.keys(cart).forEach((id: string) => {
    count += cart[id as keyof typeof cart].qty;
  });
  return count;
};
const getTotalPrice = (cart: { [id: string]: Product }) => {
  let price = 0;
  _.keys(cart).forEach((id: string) => {
    const item = cart[id as keyof typeof cart];
    price += item.qty * item.price;
  });
  return price;
};
const getCartItems = (cart: { [id: string]: Product }) => {
  return _.keys(cart).map((id: string) => {
    const item = cart[id as keyof typeof cart];
    return item;
  });
};
function useGetCart(props: GetCartProps) {
  const { id } = props;
  const cart = useAppSelector((state: RootState) => state.cart);

  const count = id && id.toString() in cart ? cart[id].qty : 0;
  const totalCount = getTotalCount(cart);
  const totalPrice = getTotalPrice(cart);
  const allCartItems = getCartItems(cart);
  const dispatch = useAppDispatch();
  const handleAdd = (item: Product) => {
    dispatch(addToCart(item));
  };
  const handleIncrease = (id: string) => {
    dispatch(increaseQty(id));
  };
  const handleDecrease = (id: string) => {
    dispatch(decreaseQty(id));
  };
  return {
    count,
    totalCount,
    dispatch,
    handleAdd,
    handleIncrease,
    handleDecrease,
    cart,
    totalPrice,
    allCartItems,
  };
}

export default useGetCart;
