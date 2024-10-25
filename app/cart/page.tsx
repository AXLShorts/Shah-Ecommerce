"use client";

import useCartStore from "@/store/useCartStore";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type Product = {
  id: number;
  img: string;
  title: string;
  price: number | string;
  description: string;
};

const Page = () => {
  const { cart, removeFromCart } = useCartStore();
  return (
    <div className="p-4 py-0 md:py-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 col-span-2 lg:col-span-3">
        {cart.map((product: Product) => (
          <Card
            key={product.id}
            className="flex flex-col justify-between relative md:max-w-[490px]"
          >
            <div className="absolute right-2 top-2 text-[#212529] rounded-xl px-2.5 py-1 bg-[#e6ebef] text-sm flex justify-center items-center">
              {typeof product.price === "number"
                ? `$${product.price}`
                : product.price}
            </div>
            <CardHeader className="p-0 pb-4 rounded-lg rounded-b-none overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                width={400}
                height={200}
                className="w-full"
              />
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-start p-4 pt-0">
              <CardTitle className="text-lg">{product.title}</CardTitle>
              <CardDescription className="text-sm">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto p-4 pt-0 w-full">
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => {
                  removeFromCart(product.id);
                }}
              >
                Remove from Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex flex-col gap-4 col-span-2 lg:col-span-1 w-full">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <p className="text-sm text-muted-foreground -mt-4">
          Items in the cart:
        </p>
        <ul>
          {cart.map((product: Product) => (
            <li key={product.id} className="flex justify-between">
              <span>{product.title}</span>
              <span>
                {typeof product.price === "number"
                  ? `$${product.price}`
                  : product.price}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/checkout" className="w-full">
          <Button className="w-full">Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
