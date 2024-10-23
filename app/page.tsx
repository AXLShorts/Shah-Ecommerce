import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    img: "https://picsum.photos/400/200",
    title: "Energy Audit",
    price: 300,
  },
  {
    id: 2,
    img: "https://picsum.photos/400/200",
    title: "Grant Consultation 1 Hour",
    price: 150,
  },
  {
    id: 3,
    img: "https://picsum.photos/400/200",
    title: "New Services",
    price: 250,
  },
  {
    id: 4,
    img: "https://picsum.photos/400/200",
    title: "Cancel Service",
    price: 200,
  },
  {
    id: 5,
    img: "https://picsum.photos/400/200",
    title: "Technician Site Visit",
    price: 100,
  },
  {
    id: 6,
    img: "https://picsum.photos/400/200",
    title: "Service Relocation",
    price: 150,
  },
  {
    id: 7,
    img: "https://picsum.photos/400/200",
    title: "Reconnect Service",
    price: 50,
  },
  {
    id: 8,
    img: "https://picsum.photos/400/200",
    title: "Service Upgrade",
    price: 100,
  },
  {
    id: 9,
    img: "https://picsum.photos/400/200",
    title: "Solar Panel Consultation (Call)",
    price: "Free",
  },
  {
    id: 10,
    img: "https://picsum.photos/400/200",
    title: "Solar Panel Consultation (Site Visit)",
    price: 200,
  },
  {
    id: 11,
    img: "https://picsum.photos/400/200",
    title: "Insulation Consultation",
    price: "Free",
  },
  {
    id: 12,
    img: "https://picsum.photos/400/200",
    title: "Insulation Consultation (Site Visit)",
    price: 200,
  },
  {
    id: 13,
    img: "https://picsum.photos/400/200",
    title: "Solar Panel Installation",
    price: "Contact for Quote",
  },
  {
    id: 14,
    img: "https://picsum.photos/400/200",
    title: "Insulation Upgrade",
    price: "Contact for Quote",
  },
  {
    id: 15,
    img: "https://picsum.photos/400/200",
    title: "Furnace Upgrade",
    price: "1,000+ Material cost",
  },
  {
    id: 16,
    img: "https://picsum.photos/400/200",
    title: "Electric Vehicle Charger",
    price: 2000,
  },
];

export default function Home() {
  return (
    <div className="p-4 py-0 md:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col justify-between relative"
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
            </CardContent>
            <CardFooter className="mt-auto p-4 pt-0">
              <Button
                className="w-full text-white bg-[#31a08a]"
                variant="default"
              >
                Book Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
