import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Card from '../Card/Card';
import DashboardLayout from '../Layout/DashboardLayout';
import BotFlow from '../botFlow/BotFlow';


export default function Router() {
    const routes = useRoutes([
      {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            { element: <Navigate to="/" />, index: true },
            { path: 'card', element: <Card /> },
            {path:"bot/:id/flow", element:<BotFlow />},
            // { path: 'experts', element: <Experts /> },
            // { path: 'dashboard', element: <Dashboard /> },
            // { path: 'members', element: <Members /> },
            // { path: 'bookings', element: <Bookings /> },
            // { path: 'rooms', element: <Rooms /> },
            // { path: 'guests', element: <Guests /> },
    
          ],
    
      },
      {
        path: '/card',
        element: <Card/>,
    
      },
      
  
    ]);
  
    return routes;
  }
