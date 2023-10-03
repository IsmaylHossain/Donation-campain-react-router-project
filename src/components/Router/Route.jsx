import {
  createBrowserRouter
} from "react-router-dom";


import ErrorElement from '../ErrorElement/ErrorElement'

import Root from "../Root/Root";
import Home from "../Home/Home";
import Donation from "../Donation/Donation"
import Statistics from "../Statistics/Statistics";
import CardDetails from "../CardDetails/CardDetails";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('../../../public/data.json')
      },
      {
          path: '/donation',
          element: <Donation></Donation>
      },
      {
          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: ()=> fetch('../../../public/data.json') 
      },
      {
        path: '/cards/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../../../public/data.json')
      }
    ]
    
  }
]);

export default myCreatedRoute;