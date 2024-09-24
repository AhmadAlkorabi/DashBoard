import { useEffect, useState } from "react";
import NavList from "./nav/NavList";
import { firstNavConfig } from "./nav/config";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/rootReducer";
import { dispatch } from "@/redux/store";
import { updateUIState, updateCurrentScreen } from "@/redux/slice/ui";
import { DialogTitle } from "@radix-ui/react-dialog";
const SideBar: React.FC = () => {
  const { openSidebar, currentScreen } = useSelector(
    (state: IRootState) => state.ui
  );
  const [showTitle, setShowTitle] = useState(false);

  const closeSidebarHandler = (open: boolean) => {
    dispatch(updateUIState({ key: "openSidebar", payload: open }));
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateCurrentScreen());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (openSidebar) {
      setTimeout(() => setShowTitle(true), 300);
    } else {
      setShowTitle(false);
    }
  }, [openSidebar]);

  const sidebarContent = (
    <div className=" flex flex-1 flex-col justify-between gap-6 pt-8 ">
      <div className="flex flex-1 flex-col justify-start  gap-1 mb-2 ">
        <NavList navListData={firstNavConfig} showTitle={showTitle} />
      </div>
    </div>
  );

  return currentScreen == "lg" ||
    currentScreen == "xl" ||
    currentScreen == "2xl" ? (
    <div
      className={cn(
        "flex flex-col border border-r-gray-200 sticky top-0 z-50 h-screen overflow-y-auto transition-all duration-300 ",
        openSidebar ? "w-[280px]" : "w-[80px]"
      )}
    >
      <div className="-mt-4 overflow-y-auto overflow-x-hidden flex flex-1 px-2">
        {sidebarContent}
      </div>
    </div>
  ) : (
    <Drawer
      shouldScaleBackground={true}
      open={openSidebar}
      direction="left"
      onOpenChange={closeSidebarHandler}
    >
      <DrawerContent
        aria-describedby=""
        draggable={true}
        className={cn(
          "flex flex-1 flex-col border m-0 border-r-gray-200 h-screen overflow-y-auto fixed top-0 z-50 ",
          "w-[280px]"
        )}
      >
        <DialogTitle></DialogTitle>
        <div className=" overflow-y-auto px-2 overflow-x-hidden flex flex-1">
          {sidebarContent}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SideBar;
