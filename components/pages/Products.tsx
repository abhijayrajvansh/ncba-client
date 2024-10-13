import React from "react";
import { Button } from "../ui/button";

const products = [
  {
    step: "Step 1",
    title: "SIT",
    description:
      "Discover the full potential of our APIs and try them out for yourself in our secure sandbox environment.",
  },
  {
    step: "Step 2",
    title: "UAT",
    description:
      "Done with integrations? Move on to testing under production-simulated UAT environment with backend support.",
  },
  {
    step: "Step 3",
    title: "Go Live",
    description:
      "Got the go ahead from SIT and UAT? Put your services to play by requesting production access and going live.",
  },
];

export const Products = () => {
  return (
    <section className="py-12 bg-white text-blue-900 container mx-auto px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3">Our Products</h2>
        <p className="text-gray-600 mb-8">Here's how it works.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md flex flex-col justify-between gap-5 transition-shadow bg-blue-50"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">
                  {product.step}
                </h3>
                <h4 className="text-xl font-bold mb-4">{product.title}</h4>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
              <div>
                <Button className="w-full">Let's Explore</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
