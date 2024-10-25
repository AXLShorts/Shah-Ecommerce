/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

import { CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useCartStore from "@/store/useCartStore";
import Link from "next/link";

type Product = {
  id: number;
  img: string;
  title: string;
  price: number | string;
  description: string;
};

const Page = () => {
  const { cart, clearCart } = useCartStore();
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Checkout Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label>Card Type</Label>
              <RadioGroup
                defaultValue="visa"
                className="flex flex-wrap justify-start"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="visa" id="visa" />
                  <Label htmlFor="visa">Visa</Label>
                  <img
                    src="/assets/checkout/visa.png"
                    alt="Visa Credit Card"
                    className="w-8 h-auto"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mastercard" id="mastercard" />
                  <Label htmlFor="mastercard">Mastercard</Label>
                  <img
                    src="/assets/checkout/mastercard.png"
                    alt="Mastercard Credit Card"
                    className="w-8 h-auto"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="american" id="american" />
                  <Label htmlFor="american">American Express</Label>
                  <img
                    src="/assets/checkout/american.png"
                    alt="American Express Credit Card"
                    className="w-8 h-auto"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="discover" id="discover" />
                  <Label htmlFor="discover">Discover</Label>
                  <img
                    src="/assets/checkout/discover.png"
                    alt="Discover Credit Card"
                    className="w-8 h-auto"
                  />
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <CardTitle className="p-6">Your Cart</CardTitle>
            <div className="grid grid-cols-1 gap-4 w-full">
              {cart.map((product: Product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between"
                >
                  <span>{product.title}</span>
                  <span>${product.price}</span>
                </div>
              ))}
            </div>
            <Button
              variant="destructive"
              onClick={() => {
                clearCart();
              }}
              className="w-full"
            >
              Clear Cart
            </Button>
          </CardContent>
          <CardFooter>
            <Link href="/" className="w-full -mt-4">
              <Button
                className="w-full"
                onClick={() => {
                  clearCart();
                }}
              >
                <CreditCard className="mr-2 h-4 w-4" /> Checkout
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
