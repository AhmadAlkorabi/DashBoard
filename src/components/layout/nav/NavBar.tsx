import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IRootState } from "@/redux/rootReducer";
import { updateUIState } from "@/redux/slice/ui";
import { dispatch } from "@/redux/store";
import { AlignJustify } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { openSidebar, currentScreen } = useSelector(
    (state: IRootState) => state.ui
  );
  const toggleDrawer = () => {
    dispatch(updateUIState({ key: "openSidebar", payload: !openSidebar }));
  };

  return (
    <div
      className={`flex items-center lg:justify-end justify-between p-1 h-16 text-black flex-1 bg-white absolute transition-all duration-300 ${
        currentScreen == "lg" || currentScreen == "xl" || currentScreen == "2xl"
          ? openSidebar
            ? "left-[280px] w-[calc(100%-280px)]"
            : "left-20 w-[calc(100%-80px)]"
          : "left-0 w-full"
      }`}
    >
      <AlignJustify
        className="ms-3 lg:hidden cursor-pointer"
        size={35}
        onClick={toggleDrawer}
      />
      <div className="flex gap-[13px] items-center">
        <Select>
          <SelectTrigger className="w-[124px] flex items-center justify-between  bg-third">
            <div className="flex justify-start gap-1">
              <img src="src/assets/People.svg" alt="notification" />
              <SelectValue placeholder="EEE" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="english">EN</SelectItem>
              <SelectItem value="arabic">AR</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <img
          src="src/assets/notification.svg"
          alt="notification"
          className="cursor-pointer"
        />
        <div className="w-[54px] h-[54px] bg-third rounded-full text-xs flex items-center justify-center">
          Account
        </div>
      </div>
    </div>
  );
};

export default Navbar;
