import React from "react";
import { useLocation } from "react-router-dom";
import { firstNavConfig } from "./config";
import NavItem from "./NavItem";
import { dispatch } from "@/redux/store";
import { updateUIState } from "@/redux/slice/ui";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/rootReducer";
// import logo from "/src/assets/logo.svg";
import Typography from "@/components/ui/typography";
const NavList: React.FunctionComponent<{
  navListData: typeof firstNavConfig;
  showTitle: boolean;
}> = ({ navListData, showTitle }) => {
  const { pathname } = useLocation();
  const { openSidebar } = useSelector((state: IRootState) => state.ui);

  const toggleDrawer = () => {
    dispatch(updateUIState({ key: "openSidebar", payload: !openSidebar }));
  };

  return (
    <ul className="flex flex-col gap-1">
      <li>
        <div
          className={`flex items-center mb-3 ${
            !openSidebar && "justify-center"
          } text-main`}
        >
          <div
            onClick={toggleDrawer}
            style={{
              width: "54px",
              height: "54px",
              backgroundColor: "#D9D9D9",
              borderRadius:"50%"
            }}
          />
        </div>
      </li>
      {navListData.map((navItem) => (
        <li key={navItem.title} className="list-none">
          <NavItem
            {...navItem}
            icon={navItem.icon}
            isMatch={pathname.includes(navItem.pathname)}
            showTitle={showTitle}
          />
        </li>
      ))}
    </ul>
  );
  };


export default NavList;
