import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import TooltipButton from "@/components/global/toolTipButton";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/rootReducer";

interface NavItemProps {
  title: string;
  icon: JSX.Element;
  pathname?: string;
  isMatch: boolean;
  className?: string;
  onClick?: () => void;
  showTitle: boolean;
}

const NavItem: React.FunctionComponent<NavItemProps> = ({
  title,
  pathname,
  icon,
  isMatch,
  className,
  onClick,
  showTitle,
}) => {
  const { openSidebar } = useSelector((state: IRootState) => state.ui);
  return (
    <div
      className={cn(
        `flex items-center w-full  rounded-radius_sm my-1 ${
          isMatch ? "bg-secondary" : "hover:bg-[#f1f1f1]"
        }`,
        className
      )}
    >
      <Link
        to={pathname || "#"}
        onClick={onClick}
        className={cn(
          `text-gray-700  text-md leading-6 font-medium w-full flex ${
            openSidebar ? "justify-start" : "justify-center"
          } items-center gap-3 px-3 py-2 transition-opacity duration-300 `,
          isMatch && "text-gray-800"
        )}
      >
        <TooltipButton
          icon={icon}
          title={title}
          className={isMatch ? "text-white" : "text-black"}
        />
        {showTitle && (
          <span
            className={`${cn(
              "ml-2 text-primary",
              showTitle ? "opacity-100" : "opacity-0",
              
            )}  `}
          >
            {title}
          </span>
        )}
      </Link>
    </div>
  );
};

export default NavItem;
