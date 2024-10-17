'use client'

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/structures/ProductCard";
import { products } from "@/config/product.config";
import { Button } from "../ui/button";

const Apis = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = (category: string) => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((product) => category === "ALL" || product.category === category);
  };

  return (
    <div className="px-5">
      <div className="p-4 rounded-lg">
        <div className="my-7 text-center flex flex-col gap-3">
          <div className="text-4xl text-blue-900 font-semibold">Get started with Open Banking APIs</div>
          <p className="text-gray-500">
            Build and securely integrate your digital solutions.
          </p>
        </div>
        <div className="flex items-center justify-between gap-5 px-2 mb-5">
          <div className="text-xl font-semibold">Filter By Category</div>
          <div>
            <div className="flex items-center gap-3">
              <Input
                type="text"
                placeholder="Search through our APIs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 w-52"
              />
              <Button disabled>Search</Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="ALL">
          <TabsList>
            <TabsTrigger value="ALL">All Categories</TabsTrigger>
            <TabsTrigger value="ENQUIRY">Enquiry APIs</TabsTrigger>
            <TabsTrigger value="PAYMENTS">Payments APIs</TabsTrigger>
            <TabsTrigger value="MOBILE MONEY PAYMENT">Mobile Money Payment APIs</TabsTrigger>
          </TabsList>

          <div className="mt-7 bg-gray-100 p-4 rounded-md w-full">
            <TabsContent value="ALL">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts("ALL").map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ENQUIRY">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts("ENQUIRY").map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="PAYMENTS">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts("PAYMENTS").map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="MOBILE MONEY PAYMENT">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts("MOBILE MONEY PAYMENT").map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Apis;
