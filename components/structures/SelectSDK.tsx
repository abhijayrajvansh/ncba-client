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
        <SelectItem value="http">HTTP</SelectItem>
        <SelectItem value="javascript">JavaScript</SelectItem>
        <SelectItem value="python">Python</SelectItem>
        <SelectItem value="java">Java</SelectItem>
        <SelectItem value="ruby">Ruby</SelectItem>
        <SelectItem value="csharp">C#</SelectItem>
        <SelectItem value="php">PHP</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectSDK;
