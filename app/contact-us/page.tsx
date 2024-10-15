import React from "react";
import ContactUs from "@/components/pages/ContactUs";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center container mx-auto">
      <div className="flex items-center justify-around w-full">
        <ContactUs />

        <div>
          <Image height={600} width={600}
            src="/images/flat-design-illustration-customer-support_23-2148887720.avif"
            alt="Contact Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
