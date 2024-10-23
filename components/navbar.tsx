import React from "react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex justify-between items-center text-nowrap px-4">
      <div>
        <Link href="/" className="flex gap-2 sm:gap-4 items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <h1 className="text-[#18571b] text-lg sm:text-2xl font-bold">
            NA Energy Solutions
          </h1>
        </Link>
      </div>
      <div className="lg:flex gap-2 xl:gap-4 w-1/2 items-center justify-end hidden">
        <Link href="/">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Home
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className="text-base px-2 xl:px-4">
            About Us
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Contact
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Privacy Policy
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Refund Policy
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Terms & Conditions
          </Button>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger className="p-1 border rounded-md">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader className="pt-6">
              <SheetTitle className="hidden">Menu</SheetTitle>
              <Button variant="default">Home</Button>
              <Button variant="default">About Us</Button>
              <Button variant="default">Contact</Button>
              <Button variant="default">Privacy Policy</Button>
              <Button variant="default">Refund Policy</Button>
              <Button variant="default">Terms & Conditions</Button>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
