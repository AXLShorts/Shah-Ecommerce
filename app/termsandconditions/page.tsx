import React from "react";

const page = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>
      <p className="text-lg mb-4">Effective Date: Aug 1, 2024</p>

      <p className="text-lg mb-6">
        Welcome to NA ENERGY SOLUTIONS (“we,” “us,” “our”). These Terms and
        Conditions (“Terms”) govern your access to and use of our services and
        website{" "}
        <a
          href="https://www.naenergysolutions.net"
          className="text-blue-600 hover:underline"
        >
          www.naenergysolutions.net
        </a>{" "}
        (“Website”). By using our Website and services, you agree to comply with
        and be bound by these Terms. Please read them carefully.
      </p>

      <h3 className="text-xl font-bold mb-4">1. Acceptance of Terms</h3>
      <p className="text-lg mb-6">
        By accessing our Website or purchasing any services from us, you agree
        to these Terms. If you do not agree to these Terms, please do not use
        our Website or services.
      </p>

      <h3 className="text-xl font-bold mb-4">2. Services</h3>
      <p className="text-lg mb-4">
        NA ENERGY SOLUTIONS is committed to providing comprehensive energy
        solutions designed to optimize energy efficiency and reduce costs for
        our customers. Our range of services includes:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <span className="font-bold">
            Solar Panel Consultation and Installation:
          </span>{" "}
          We offer expert advice on solar energy solutions tailored to your
          specific needs. Our services include consultation, system design, and
          professional installation of solar panels to help you harness
          renewable energy.
        </li>
        <li>
          <span className="font-bold">
            Insulation Installation and Consultation:
          </span>{" "}
          Our team provides detailed assessments of your property’s insulation
          needs, offering both consultation and installation services to improve
          energy efficiency and comfort in your home or business.
        </li>
        <li>
          <span className="font-bold">Grant Consultation:</span> We assist
          clients in identifying and applying for grants, rebates, and other
          financial incentives available for energy-efficient upgrades and
          renewable energy installations.
        </li>
        <li>
          <span className="font-bold">High-Efficiency Furnaces:</span> We supply
          and install high-efficiency furnaces that reduce energy consumption
          while keeping your space warm. Our services include product
          recommendations, installation, and maintenance.
        </li>
        <li>
          <span className="font-bold">Home Heating and Cooling Systems:</span>{" "}
          We provide consultation, installation, and maintenance services for
          advanced home heating and cooling systems, ensuring optimal
          performance and energy savings.
        </li>
        <li>
          <span className="font-bold">
            New Electricity and Gas Services or Upgrades:
          </span>{" "}
          Upgrade your home or business with our comprehensive electricity and
          gas services. Whether you’re looking to increase capacity, improve
          efficiency, or install new connections, our expert team will ensure a
          seamless transition.
        </li>
        <li>
          <span className="font-bold">Additional Services:</span> Our expertise
          extends to various other energy solutions, including energy audits,
          smart thermostats, and energy management systems.
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-4">3. Purchase and Payment</h3>
      <p className="text-lg mb-6">
        Before receiving any services from NA ENERGY SOLUTIONS, you are required
        to agree to these Terms and meet the payment obligations as specified in
        your service agreement.
      </p>

      <h3 className="text-xl font-bold mb-4">4. Refund Policy</h3>
      <p className="text-lg mb-6">
        We offer a 30-day refund policy for all services purchased. To be
        eligible, you must submit a written request within 30 days of your
        purchase.
      </p>

      <h3 className="text-xl font-bold mb-4">5. Third-Party Services</h3>
      <p className="text-lg mb-6">
        NA ENERGY SOLUTIONS facilitates energy services from third-party vendors
        but is not responsible for their performance or outcomes.
      </p>

      <h3 className="text-xl font-bold mb-4">6. Limitation of Liability</h3>
      <p className="text-lg mb-6">
        To the fullest extent permitted by law, NA ENERGY SOLUTIONS disclaims
        all warranties and shall not be liable for any damages arising from the
        use of our Website or services.
      </p>

      <h3 className="text-xl font-bold mb-4">7. Governing Law</h3>
      <p className="text-lg mb-6">
        These Terms shall be governed by the laws of Alberta (Canada) or New
        Mexico (USA), depending on the client&apos;s location.
      </p>

      <h3 className="text-xl font-bold mb-4">8. Changes to Terms</h3>
      <p className="text-lg mb-6">
        We reserve the right to update these Terms at any time. Any changes will
        be effective immediately upon posting on this page.
      </p>

      <h3 className="text-xl font-bold mb-4">9. Contact Information</h3>
      <p className="text-lg mb-6">
        If you have any questions, please contact us at:
        <br />
        NA ENERGY SOLUTIONS
        <br />
        Email:{" "}
        <a
          href="mailto:support@naenergysolutions.net"
          className="text-blue-600 hover:underline"
        >
          support@naenergysolutions.net
        </a>
        <br />
        Phone: 845-789-9004
      </p>
    </div>
  );
};

export default page;
