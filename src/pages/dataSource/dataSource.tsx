import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Typography from "@/components/ui/typography";
import { SelectItem } from "@radix-ui/react-select";
import { Plus } from "lucide-react";
const DataSource = () => {
  return (
    <div>
      <div className="w-2/5">
        <Typography className="text-4xl mb-5">Data sources</Typography>
        <Typography className="text-xs">
          On this page you can manage connections between Smetrics and the data
          sources you use in your reporting.
        </Typography>
        <div className="text-lg flex justify-between  mt-3">
          <Typography size="bold">Data sources and connections</Typography>
          <Typography className="text-[#858585]">Account management</Typography>
        </div>
        <div className="flex gap-4 justify-around mt-3 ">
          <Input placeholder="Search by data Source" className="w-[342px]" />
          <Select>
            <SelectTrigger className="w-[124px] bg-white">
              <div className="flex justify-start gap-1">
                <SelectValue placeholder="Show all" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="english">EN</SelectItem>
                <SelectItem value="arabic">AR</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[124px] bg-white">
              <div className="flex justify-start gap-1">
                <SelectValue placeholder="Short" />
              </div>
            </SelectTrigger>
          </Select>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="rounded-none  ">View Packages</Button>
      </div>
      <div>
        <Typography className="font-medium ">Connected data sources</Typography>
        <Typography className="my-2">
          On this page you can manage connections between Smetrics and the data
          sources you use in your reporting.
        </Typography>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {new Array(2).fill(1).map((_, index) => (
          <div
            key={index}
            className="flex gap-2 bg-white justify-between items-center shadow-md cursor-pointer  p-2"
          >
            <div className="flex gap-2 flex-wrap">
              <img src="src/assets/facebook.svg" />
              <Typography>Facebook Ads</Typography>
            </div>
            <div className="flex flex-wrap">
              <Typography className="text-fourth">connections</Typography>
              <img src="src/assets/arrow.svg" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Typography className="font-medium ">Connected data sources</Typography>
        <Typography className="my-2">
          On this page you can manage connections between Smetrics and the data
          sources you use in your reporting.
        </Typography>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {new Array(8).fill(1).map((_, index) => (
          <div
            key={index}
            className="flex gap-2 bg-white justify-between items-center shadow-md cursor-pointer  p-2"
          >
            <div className="flex gap-2">
              <img src="src/assets/facebook.svg" />
              <Typography>Facebook Ads</Typography>
            </div>
            <Plus />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSource;
