/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-8 px-4">
      <div className="w-full h-[457px] relative">
        <img
          src="/assets/aboutus/banner.jpg"
          alt="About Us Banner"
          className="size-full object-cover"
        />
        <div className="absolute top-0 left-0 size-full bg-black opacity-35 z-10 flex justify-center items-center text-center"></div>
        <h2 className="text-white text-center absolute top-[50%] left-[50%] z-20 transform translate-x-[-50%] translate-y-[-50%] font-medium text-5xl w-full max-w-[1200px] text-wrap uppercase">
          Maximizing Savings Through Smart Energy Solutions
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src="/assets/aboutus/story.jpg"
            alt="About Us Banner"
            className="size-full max-h-[450px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 text-base md:text-lg">
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold sm:font-semibold md:font-medium">
            Our Story
          </h3>
          <p>
            Welcome to NA Energy Solutions, your trusted partner in energy
            efficiency. We are a team of dedicated professionals with a shared
            passion for making the world a greener and more energy-efficient
            place.
          </p>
          <p>
            Our story began over 10 years ago in Alberta, where we set out with
            a mission to help consumers save money on energy and reduce their
            environmental impact. Since then, we have expanded our operations to
            include states in the USA and other provinces in Canada, but our
            mission remains the same.
          </p>
          <p>
            At NA Energy Solutions, we believe in the power of energy efficiency
            to make a difference in the world. We invite you to join us on this
            journey towards a greener and more sustainable future.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-base md:text-lg">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold sm:font-semibold md:font-medium">
          Our Expertise and Commitment
        </h3>
        <p>
          Our team brings over 15 years of industry experience to the table, and
          we pride ourselves on our in-house capabilities. From project
          management to grant consultation, we have the expertise to handle
          every aspect of your energy efficiency journey. When you choose to
          work with us, you will be assigned a dedicated case manager who will
          be your single point of contact throughout the process. This ensures a
          seamless and personalized experience for every customer.
        </p>
        <p>
          We are constantly updating our knowledge and skills to stay abreast of
          the latest developments in the industry. Our in-house grant
          consultants are well-versed in all available programs, and we can
          guide you through the process of applying for grants that can help
          offset the cost of energy-efficient upgrades.
        </p>
        <p>
          But what truly sets us apart is our commitment to customer
          satisfaction. We stand by the quality of our services, and we offer a
          satisfaction guarantee. If you are not satisfied with the services you
          receive, or if you do not see a significant reduction in your energy
          costs, we will refund all your money. That’s our promise to you.
        </p>
      </div>
      <Link href="/contactus">
        <Button className="p-6 text-xl">Contact Us</Button>
      </Link>
    </div>
  );
};

export default page;
