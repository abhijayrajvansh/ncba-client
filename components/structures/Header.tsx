"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerItems } from '@/config/headerItems.config'


const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between py-3 px-10 mb-6 border-b items-center shadow-md bg-white text-black">
      <Link href={"/"}>
        <div className="font-bold text-2xl text-gray-600">Developer Portal</div>
      </Link>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-6 mr-6">
          {headerItems.map((items) => {
            let currentPathname = "/" + items.title.toLowerCase();
            if (currentPathname === "/home") currentPathname = "/";
            if (currentPathname === "/contact us") currentPathname = "/contact-us";

            const isActive = items.link === "/" ? pathname === "/" : pathname.startsWith(items.link);

            return (
              <Link
                href={items.link}
                key={items.title}
                className={`font-semibold ${isActive ? "text-primary" : ""}`}
              >
                {items.title}
              </Link>
            );
          })}

          <Select defaultValue="Kenya">
            <SelectTrigger className="w-[100px] bg-gray-100">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kenya">Kenya</SelectItem>
              <SelectItem value="Uganda">Uganda</SelectItem>
              <SelectItem value="Tanzania">Tanzania</SelectItem>
              <SelectItem value="Rwanda">Rwanda</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="font-semibold border-primary text-primary hover:bg-primary hover:text-white"
          variant={"outline"}
        >
          login
        </Button>
        <Button className="font-semibold">sign up</Button>
      </div>
    </div>
  );
};

export default Header;
