import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from '../src/components/Layout/Main';
import Home from './components/Home/Home';
import OrderReview from "./components/Layout/OrderReview/OrderReview";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("tshirts.json"),
        element: <Home />,
      },
      {
        path: "review",
        element: <OrderReview />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
