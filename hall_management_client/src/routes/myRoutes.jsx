import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Hallfee from '../pages/Form'
import AdminLayout from '../components/layouts/AdminLayout';
import AdminHome from '../pages/AdminHome';
import Achievements from '../pages/Achievements'
import Token from '../pages/Token';
const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/achievements",
        element:<Achievements/>,
      },
      {
        path:"/token",
        element:<Token/>,
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  { 
    path: '/hallfee',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hallfee />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  }
]);

export default myRoutes;
