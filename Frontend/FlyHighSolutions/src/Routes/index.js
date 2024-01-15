import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import DefaultPageLayout from "../Layouts/DefaultPageLayout";
import SingupPageLayout from "../Layouts/SingUpPageLayout";
import HomePage from "../Pages/Home";
import FeaturesPage from "../Pages/Features";
import WorkspaceLayout from "../Layouts/WorkspaceLayout";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<DefaultPageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Route>
      <Route path="/singup" element={<SingupPageLayout />}>

      </Route>
      <Route path="/workspace" element={<WorkspaceLayout />}>

      </Route>
    </Route>
  )
);

export default AppRoutes;