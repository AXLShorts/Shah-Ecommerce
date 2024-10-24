/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 w-full">
      <h1 className="text-center text-2xl sm:text-4xl md:text-[64px] font-bold uppercase">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src="/assets/contactus/left.jpg"
            alt="Contact Us Banner"
            className="size-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p>
            Our team at NA Energy Solutions is committed to providing you with
            the best service possible. We’re ready to help you save money and
            make a positive impact on the environment. Contact us today to get
            started on your journey to energy efficiency.
          </p>
          <p>
            <strong>Email:</strong> support@naenergysolutions.net
          </p>
          <p>
            <strong>Phone:</strong> 825-488-4619
          </p>
          <p>
            <strong>Business Hours:</strong> 8 AM – 5 PM CST
          </p>
          <div className="flex flex-col w-full gap-2 text-base">
            <Label htmlFor="name">
              Full Name <span className="text-destructive/90">*</span>{" "}
            </Label>
            <Input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="flex flex-col w-full gap-2 text-base">
            <Label htmlFor="email">
              Email <span className="text-destructive/90">*</span>{" "}
            </Label>
            <Input type="text" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="flex flex-col w-full gap-2 text-base">
            <Label htmlFor="message">
              Message <span className="text-destructive/90">*</span>{" "}
            </Label>
            <Textarea id="message" placeholder="Type your message here" />
          </div>
          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
