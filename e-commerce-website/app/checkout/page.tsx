'use client'
import useGetCart from "@/commonHooks/useGetCart";
import { Button, EmptyCart } from "@/components";
import React from "react";

const page = () => {
    let totalCartPrice = 0;
    const { allCartItems  } = useGetCart({ id: null });
  
    if (allCartItems.length === 0){
        return <EmptyCart />
    }

  return (
        <div className="w-full h-full flex overflow-hidden">
          <div className="w-2/3 flex items-center justify-center">
            <div className="w-fit p-4 flex flex-col items-center justify-center border-[1px] rounded-md border-neutral-300">
              <div className="text-xl text-primary font-bold">
                <h4>Basic Information</h4>
              </div>
              <div className="card-body">
                <div className="flex flex-col">
                  <div className="border-neutral-200 ">
                    <div className="flex flex-col">
                      <label className="text-lg font-extralight text-secondary" htmlFor='firstname'> First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        className="border-[1px] rounded-md bg-complementary"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="flex flex-col">
                      <label className="text-lg font-extralight text-secondary" > Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        className="border-[1px] rounded-md bg-complementary"

                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="flex flex-col">
                      <label className="text-lg font-extralight text-secondary" > Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        className="border-[1px] rounded-md bg-complementary"

                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="flex flex-col">
                      <label className="text-lg font-extralight text-secondary" > Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="border-[1px] rounded-md bg-complementary"

                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="flex flex-col">
                      <label className="text-lg font-extralight text-secondary" > Full Address</label>
                      <textarea
                        name="address"
                        className="border-[1px] rounded-md bg-complementary"

                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flex flex-col">
                      <label className="text-lg font-extralight text-secondary" >City</label>
                      <input
                        type="text"
                        name="city"
                        className="border-[1px] rounded-md bg-complementary"

                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flex flex-col">
                      <label className="text-lg font-extralight text-secondary" >State</label>
                      <input
                        type="text"
                        name="state"
                        className="border-[1px] rounded-md bg-complementary"

                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flex flex-col">
                      <label className="text-lg font-extralight text-secondary" >Zip Code</label>
                      <input
                        type="text"
                        name="zipcode"
                        className="border-[1px] rounded-md bg-complementary"

                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="form-group text-end">
                      <Button
                        className="btn btn-primary mx-1"
                        variant='ghost'
                      >
                        Place Order
                      </Button>
                      <Button
                        className="btn btn-primary mx-1"
                        variant='ghost'

                      >
                        Pay by Razorpay
                      </Button>
                      <Button
                        className="btn btn-warning mx-1"
                        variant='ghost'

                      >
                        Pay Online
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 h-full border-neutral-300 border-[1px] bg-complementary rounded-md p-4 box-border overflow-y-scroll">
            <table className="text-center table-auto w-full h-full  border-spacing-1">
              <thead className="border-b">
                <tr className="text-primary">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="  p-4 font-extralight">
                {allCartItems.map((item, idx) => {
                  totalCartPrice +=
                    item.price * item.qty;
                  return (
                    <tr className="border-b" key={item.id}>
                      <td title={item.title} className="whitespace-nowrap border-r py-2 max-w-[100px] overflow-hidden text-ellipsis">{item.title}</td>
                      <td className="whitespace-nowrap border-r py-2">{item.price}</td>
                      <td className="whitespace-nowrap border-r py-2">{item.qty}</td>
                      <td className="whitespace-nowrap border-r py-2">{item.price * item.qty}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={2} className="text-end fw-bold">
                    Grand Total
                  </td>
                  <td colSpan={2} className="text-end fw-bold">
                    {totalCartPrice.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  );
};

export default page;
