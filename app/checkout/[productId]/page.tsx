/* eslint-disable @next/next/no-img-element */

import React from "react";

import Image from "next/image";
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

interface PageProps {
  params: Promise<{ productId: string }>;
}

const products = [
  {
    id: 1,
    img: "https://picsum.photos/400/200",
    title: "Energy Audit",
    price: 300,
    description: "Comprehensive review of energy usage to optimize efficiency.",
  },
  {
    id: 2,
    img: "https://picsum.photos/400/200",
    title: "Grant Consultation 1 Hour",
    price: 150,
    description: "Expert advice on applying for energy-related grants.",
  },
  {
    id: 3,
    img: "https://picsum.photos/400/200",
    title: "New Services",
    price: 250,
    description: "Set up new utility services at your location.",
  },
  {
    id: 4,
    img: "https://picsum.photos/400/200",
    title: "Cancel Service",
    price: 200,
    description: "Discontinue an existing service with ease.",
  },
  {
    id: 5,
    img: "https://picsum.photos/400/200",
    title: "Technician Site Visit",
    price: 100,
    description: "Schedule an on-site technician for service assistance.",
  },
  {
    id: 6,
    img: "https://picsum.photos/400/200",
    title: "Service Relocation",
    price: 150,
    description: "Move your services to a new address smoothly.",
  },
  {
    id: 7,
    img: "https://picsum.photos/400/200",
    title: "Reconnect Service",
    price: 50,
    description: "Quickly reconnect your utility services.",
  },
  {
    id: 8,
    img: "https://picsum.photos/400/200",
    title: "Service Upgrade",
    price: 100,
    description: "Upgrade your current services for better efficiency.",
  },
  {
    id: 9,
    img: "https://picsum.photos/400/200",
    title: "Solar Panel Consultation (Call)",
    price: "Free",
    description: "Get expert advice on solar panels over the phone.",
  },
  {
    id: 10,
    img: "https://picsum.photos/400/200",
    title: "Solar Panel Consultation (Site Visit)",
    price: 200,
    description: "On-site solar panel consultation for custom solutions.",
  },
  {
    id: 11,
    img: "https://picsum.photos/400/200",
    title: "Insulation Consultation",
    price: "Free",
    description: "Free consultation to assess insulation needs.",
  },
  {
    id: 12,
    img: "https://picsum.photos/400/200",
    title: "Insulation Consultation (Site Visit)",
    price: 200,
    description: "On-site insulation assessment and recommendations.",
  },
  {
    id: 13,
    img: "https://picsum.photos/400/200",
    title: "Solar Panel Installation",
    price: "Contact for Quote",
    description: "Full solar panel installation by experts.",
  },
  {
    id: 14,
    img: "https://picsum.photos/400/200",
    title: "Insulation Upgrade",
    price: "Contact for Quote",
    description: "Upgrade your home's insulation for better energy efficiency.",
  },
  {
    id: 15,
    img: "https://picsum.photos/400/200",
    title: "Furnace Upgrade",
    price: "1,000+ Material cost",
    description: "Upgrade your furnace for improved heating performance.",
  },
  {
    id: 16,
    img: "https://picsum.photos/400/200",
    title: "Electric Vehicle Charger",
    price: 2000,
    description: "Install an EV charger at your home or business.",
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({ productId: product.id.toString() }));
}

const Page = async ({ params }: PageProps) => {
  const productId = (await params)?.productId;

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }
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
              <RadioGroup defaultValue="visa" className="flex space-x-4">
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
            <div className="relative w-full h-64">
              <Image
                src={product?.img || ""}
                alt="Product Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold">{product?.title}</h2>
            <p className="text-3xl font-bold text-primary">${product?.price}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <CreditCard className="mr-2 h-4 w-4" /> Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
