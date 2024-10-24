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
              <CardDescription className="text-sm">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto p-4 pt-0">
              <Link href={`/checkout/${product.id}`}>
                <Button
                  className="w-full text-white bg-[#31a08a]"
                  variant="default"
                >
                  Book Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
