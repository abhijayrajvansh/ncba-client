import React from "react";
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/structures/ProductCard";
import { products } from '@/config/product.config'

const Apis = () => {
  return (
    <div className="px-5">
      <div className="p-4 rounded-lg">
        <div className="flex items-center gap-5 px-2 mb-6 ">
          <div className=" text-2xl font-semibold">Filter By Category</div>
          <div>
            <Input
              type="text"
              placeholder="Search through our APIs"
              className="bg-gray-100 w-52"
            />
          </div>
        </div>
        <Tabs defaultValue="All Categories">
          <TabsList>
            <TabsTrigger value="All Categories">All Categories</TabsTrigger>
            <TabsTrigger value="ENQUIRY APIs">Enquiry APIs</TabsTrigger>
            <TabsTrigger value="PAYMENTS APIs">Payments APIs</TabsTrigger>
            <TabsTrigger value="MOBILE MONEY PAYMENT APIs">
              Mobile Money Payment APIs
            </TabsTrigger>
            <TabsTrigger value="LIPA NA MPESA (LNM) APIs">
              Lipa Na Mpesa (LNM) APIs
            </TabsTrigger>
            <TabsTrigger value="STATUTORY PAYMENT APIs">
              Statutory Payment APIs
            </TabsTrigger>
            <TabsTrigger value="BILL PAYMENTS APIs">
              Bill Payments APIs
            </TabsTrigger>
            <TabsTrigger value="CARD APIs">CARD APIs</TabsTrigger>
          </TabsList>

          <div className="mt-7 bg-gray-100 p-4 rounded-md w-full">
            <TabsContent value="All Categories">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product, index) => (
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
