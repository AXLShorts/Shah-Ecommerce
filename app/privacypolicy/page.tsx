import React from "react";

const page = () => {
  return (
    <div className="w-full px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Who We Are</h1>
      <p className="mb-6">
        Suggested text: Our website address is:{" "}
        <a
          href="https://www.naenergysolutions.net"
          className="text-blue-600 underline"
        >
          https://www.naenergysolutions.net
        </a>
        .
      </p>

      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
      <p className="text-gray-600 mb-6">Effective Date: Aug 1, 2024</p>
      <p className="mb-6">
        NA ENERGY SOLUTIONS (“we,” “us,” or “our”) is committed to protecting
        your privacy. This Privacy Policy outlines how we collect, use, and
        safeguard your information when you visit our website{" "}
        <span className="italic">[insert website URL]</span> (“Website”). Please
        read this policy carefully to understand our practices regarding your
        personal data.
      </p>

      <h3 className="text-xl font-bold mb-2">1. Information We Collect</h3>
      <p className="mb-4">
        We may collect and process the following types of information:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <span className="font-bold">Personal Information:</span> This includes
          your name, email address, phone number, and any other details you
          provide when contacting us, signing up for newsletters, or requesting
          information about our services.
        </li>
        <li className="mb-2">
          <span className="font-bold">Usage Data:</span> We may collect
          information about how you use our Website, including your IP address,
          browser type, operating system, referring URLs, and pages visited.
          This data helps us understand user behavior and improve our Website’s
          functionality.
        </li>
        <li className="mb-2">
          <span className="font-bold">Cookies:</span> Our Website may use
          cookies to enhance your experience, remember your preferences, and
          gather analytical data. You can manage your cookie preferences through
          your browser settings.
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">2. How We Use Your Information</h3>
      <p className="mb-6">We use the information we collect to:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Provide and improve our services, ensuring they meet your needs.
        </li>
        <li className="mb-2">
          Respond to your inquiries, requests, and feedback.
        </li>
        <li className="mb-2">
          Send you updates, promotional materials, and other information related
          to our services, provided you have opted in to receive such
          communications.
        </li>
        <li className="mb-2">
          Monitor and analyze trends, usage, and activities to enhance our
          Website and services.
        </li>
        <li className="mb-2">
          Protect the security and integrity of our Website.
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">3. Sharing Your Information</h3>
      <p className="mb-6">
        We do not sell, trade, or rent your personal information to third
        parties. We may share your information with:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <span className="font-bold">Service Providers:</span> Third-party
          service providers who assist us in operating our Website, conducting
          our business, or providing services to you, so long as those parties
          agree to keep this information confidential.
        </li>
        <li className="mb-2">
          <span className="font-bold">Legal Compliance:</span> We may disclose
          your information if required by law or in response to valid requests
          by public authorities (e.g., a court or government agency).
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">4. Data Security</h3>
      <p className="mb-6">
        We implement a variety of security measures to protect your personal
        information. However, no method of transmission over the internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h3 className="text-xl font-bold mb-2">5. Your Rights</h3>
      <p className="mb-6">You have the right to:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Access, correct, or delete your personal information.
        </li>
        <li className="mb-2">
          Withdraw consent to the processing of your data.
        </li>
        <li className="mb-2">
          Opt-out of receiving marketing communications from us.
        </li>
      </ul>
      <p className="mb-6">
        To exercise any of these rights, please contact us at{" "}
        <span className="italic">[insert contact email]</span>.
      </p>

      <h3 className="text-xl font-bold mb-2">6. Third-Party Links</h3>
      <p className="mb-6">
        Our Website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these websites. We
        encourage you to review their privacy policies.
      </p>

      <h3 className="text-xl font-bold mb-2">
        7. Changes to This Privacy Policy
      </h3>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date. We encourage you to
        review this policy periodically to stay informed about how we protect
        your information.
      </p>

      <h3 className="text-xl font-bold mb-2">8. Contact Us</h3>
      <p className="mb-6">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at:
      </p>
      <p className="font-bold">NA ENERGY SOLUTIONS</p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@naenergysolutions.net"
          className="text-blue-600 underline"
        >
          support@naenergysolutions.net
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href="tel:8457899004" className="text-blue-600 underline">
          845-789-9004
        </a>
      </p>
    </div>
  );
};

export default page;
