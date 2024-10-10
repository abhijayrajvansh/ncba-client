import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectSDK = () => {
  return (
    <Select defaultValue="curl">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Language SDK</SelectLabel>
          <SelectItem value="curl">cURL</SelectItem>
          <SelectItem value="javascript">JavaScript</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSDK;
