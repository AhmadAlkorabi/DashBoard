import { CSSProperties } from "react";

const Icon = (path: string | JSX.Element, className?: CSSProperties) =>
  typeof path === "string" ? (
    <img src={path} alt="nav Icon" style={className} />
  ) : (
    path
  );

const ICONS = {
  home: Icon("/src/assets/home.svg"),
  dataSource: Icon("/src/assets/dataSource.svg"),
  transform: Icon("/src/assets/transform.svg"),
  storage: Icon("/src/assets/storage.svg"),
  destinations: Icon("/src/assets/destinations.svg"),
};

export const firstNavConfig = [
  {
    title: "Home",
    icon: ICONS.home,
    pathname: "/home",
  },
  {
    title: "Data Source",
    icon: ICONS.dataSource,
    pathname: "/data-source",
  },
  {
    title: "Transform",
    icon: ICONS.transform,
    pathname: "/transform",
  },

  {
    title: "Storage",
    icon: ICONS.storage,
    pathname: "/storage",
  },
  {
    title: "Destinations",
    icon: ICONS.destinations,
    pathname: "/destinations",
  },
];
