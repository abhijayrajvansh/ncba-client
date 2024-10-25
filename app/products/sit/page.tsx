'use client'

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/config/product.config";

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-primary text-white p-8 flex justify-around">
        <div>
          <h1 className="text-4xl font-bold mb-2">TEST IN SIT ENVIRONMENT</h1>
          <p className="text-gray-100">
            Discover the full potential of our APIs and try them out for
            yourself in our secure sandbox environment.
          </p>
        </div>
        <Button variant={'outline'} className=" mt-4 text-black">Login →</Button>
      </div>

      {/* API Listings */}
      <div className="mx-auto p-8 bg-[#f3f4f6] mt-10 container rounded-lg">
        {products.map((endpoint, index) => (
          <Card
            key={index}
            className="mb-4 text-white "
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-primary mb-2 font-semibold">
                    {endpoint.category}
                  </p>
                  <h2 className="text-2xl font-medium text-black mb-2">
                    {endpoint.name}
                  </h2>
                  <p className="text-gray-600">{endpoint.description}</p>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="link"
                    className="text-blue-400 hover:text-blue-300"
                    disabled
                  >
                    View Docs
                  </Button>
                  <Button onClick={() => console.log('clicked')}
                    className="text-white"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
