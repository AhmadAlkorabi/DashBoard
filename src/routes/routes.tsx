import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { DATASOURCE_PATH, HOME_PATH} from "./path";
import Home from "@/pages/Home/home";
import DataSource from "@/pages/dataSource/dataSource";
import Layout from "@/components/layout/Layout";

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route element={<Layout />}>
          <Route path={HOME_PATH.home}>
            <Route index element={<Home />} />
          </Route>
          <Route path={DATASOURCE_PATH.dataSource}>
            <Route index element={<DataSource/>} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={HOME_PATH.home} replace />} />
    </>
  )
);
