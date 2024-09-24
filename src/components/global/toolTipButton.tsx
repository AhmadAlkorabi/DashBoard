import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TooltipButtonProps = {
  title: string;
  icon: ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const TooltipButton = ({
  title,
  icon,
  className,
  onClick,
}: TooltipButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={onClick}
          className={cn(
            className
          )}
        >
          {icon}
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs text-main">{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipButton;
