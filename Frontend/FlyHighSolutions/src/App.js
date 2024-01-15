import logo from './logo.svg';
import { Box, Button } from '@mui/material';
import './App.css';
import DefaultPage from './Layouts/DefaultPageLayout';
import {
  RouterProvider,
} from "react-router-dom";
import AppRoutes from './Routes';



function App() {
  return (
    <RouterProvider router={AppRoutes} />
  );
}

export default App;
