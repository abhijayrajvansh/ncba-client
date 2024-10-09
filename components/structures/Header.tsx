import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navigation_items = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "APIs",
    link: "/",
  },
  {
    title: "Products",
    link: "/",
  },
  {
    title: "Resources",
    link: "/",
  },
  {
    title: "FAQs",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between text-lg py-5 px-10 mb-6 border-b items-center shadow-xl">
      {/* logo */}
      <img src="" alt="ncba.png" />
      {/* navbar items */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-6 mr-10">
          {navigation_items.map((items) => (
            <div className="font-semibold">{items.title}</div>
          ))}

          <Select defaultValue="Kenya">
            {/* ye width wala hai down */}
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

        <Button size={"lg"} className="font-semibold text-lg border-primary text-primary hover:bg-primary hover:text-white" variant={"outline"}>
          login
        </Button>
        <Button size={"lg"} className="font-semibold text-lg">sign up</Button>
      </div>
    </div>
  );
};

export default Header;
