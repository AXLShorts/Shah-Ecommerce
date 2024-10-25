/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 py-8 w-full flex flex-col gap-8">
      <div className="w-full h-[800px] relative">
        <img
          src="/assets/home-banner.jpg"
          alt="Home Banner"
          className="size-full object-cover"
        />
        <div className="absolute top-0 left-0 size-full bg-black opacity-35 z-10 flex justify-center items-center text-center"></div>
        <h2 className="flex flex-col gap-4 font-bold text-5xl sm:text-6xl lg:text-7xl text-white text-center absolute top-[50%] left-[50%] z-20 transform translate-x-[-50%] translate-y-[-50%] w-full max-w-[1200px] text-wrap uppercase">
          Welcome To <br />{" "}
          <span className="text-[68px] sm:text-7xl lg:text-8xl">
            NA ENERGY SOLUTIONS
          </span>
        </h2>
      </div>
      <h2 className="text-center">Powering a Greener Tomorrow</h2>
      <p className="text-center">
        Our mission is to make the world a greener and more energy-efficient
        place. We are committed to helping consumers save money on energy, and
        we pride ourselves on being fast, friendly, efficient, and trustworthy.
      </p>
      <Button className="w-fit mx-auto">More About Us</Button>
      <h2 className="text-center">Empowering You to Save Energy and Money</h2>
      <p className="max-w-[650px] mx-auto text-center">
        At NA Energy Solutions, we offer a wide range of unique energy solutions
        to clients across North America. Our services are designed to help you
        save on energy costs, and we provide consultations and installations for
        a variety of energy-efficient systems. Our services include:
      </p>
      <ul className="max-w-[650px] mx-auto list-disc">
        <li>
          <strong>Solar Panel Installation and Consultation:</strong>&nbsp;We
          provide expert installation of solar panels, helping you harness the
          power of the sun to generate clean, renewable energy.
        </li>

        <li>
          <strong>Energy Audits:</strong>&nbsp;Our comprehensive energy audits
          can identify areas where you can save money and improve energy
          efficiency in your home or business.
        </li>

        <li>
          <strong>Furnace Upgrades and Installation:</strong>&nbsp;We can
          upgrade your existing furnace or install a new, high-efficiency
          furnace to help you save on heating costs.
        </li>

        <li>
          <strong>Heating/Cooling System Replacement/Upgrades:</strong>&nbsp;We
          can replace or upgrade your existing heating and cooling systems to
          more energy-efficient models.
        </li>

        <li>
          <strong>Insulation Consultation:</strong>&nbsp;We can advise you on
          the best insulation options for your home or business to help reduce
          energy loss and save on heating and cooling costs.
        </li>

        <li>
          <strong>Local Grant Consultations:</strong>&nbsp;We can guide you
          through the process of applying for local grants that can help offset
          the cost of energy-efficient upgrades.
        </li>

        <li>
          <strong>Electric Vehicle Charger Installation:</strong>&nbsp;We can
          install electric vehicle chargers in your home or business, making it
          easier for you to charge your electric vehicle and reduce your
          reliance on fossil fuels.
        </li>

        <li>
          <strong>New Gas/Electric Services:</strong>&nbsp;We can consult on new
          power sources or upgrades, including new power providers or ways to
          save with your existing service provider.
        </li>
      </ul>
    </div>
  );
}
