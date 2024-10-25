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
      <div className="lg:flex gap-1.5 xl:gap-4 w-1/2 items-center justify-end hidden">
        <Link href="/">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Home
          </Button>
        </Link>
        <Link href="/services">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Services
          </Button>
        </Link>
        <Link href="/aboutus">
          <Button variant="link" className="text-base px-2 xl:px-4">
            About Us
          </Button>
        </Link>
        <Link href="/contactus">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Contact
          </Button>
        </Link>
        <Link href="/privacypolicy">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Privacy Policy
          </Button>
        </Link>
        <Link href="/refundpolicy">
          <Button variant="link" className="text-base px-2 xl:px-4">
            Refund Policy
          </Button>
        </Link>
        <Link href="/termsandconditions">
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
              <Link
                href="/"
                className="block py-2 text-lg font-bold text-[#18571b]"
              >
                <Button className="w-full">Home</Button>
              </Link>
              <Link
                href="/services"
                className="block py-2 text-lg font-bold text-[#18571b]"
              >
                <Button className="w-full">Services</Button>
              </Link>
              <Link
                href="/aboutus"
                className="block py-2 text-lg font-bold text-[#18571b]"
              >
                <Button className="w-full">About Us</Button>
              </Link>
              <Link
                href="/contactus"
                className="block py-2 text-lg font-bold text-[#18571b]"
              >
                <Button className="w-full">Contact</Button>
              </Link>
              <Link
                href="/privacypolicy"
                className="block py-2 text-lg font-bold text-[#18571b]"
              >
                <Button className="w-full">Privacy Policy</Button>
              </Link>
              <Link
                href="/refundpolicy"
                className="block py-2 text-lg font-bold text-[#18571b]"
              >
                <Button className="w-full">Refund Policy</Button>
              </Link>
              <Link
                href="/termsandconditions"
                className="block py-2 text-lg font-bold text-[#18571b]"
              >
                <Button className="w-full">Terms & Conditions</Button>
              </Link>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
