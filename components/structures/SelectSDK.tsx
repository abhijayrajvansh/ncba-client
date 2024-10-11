import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SdkType } from "@/types/codeSnippet-sdk.type"

type SelectSDKProps = {
  setSdk: (sdk: SdkType) => void;
};

const SelectSDK: React.FC<SelectSDKProps> = ({ setSdk }) => {
  const handleSdkChange = (value: string) => {
    setSdk(value as SdkType);
  };

  return (
    <Select onValueChange={handleSdkChange} defaultValue="javascript">
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="SDK" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="curl">cURL</SelectItem>
        <SelectItem value="javascript">JavaScript</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectSDK;
