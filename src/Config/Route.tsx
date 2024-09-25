import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "../Screens/Login/LoginWrapper";
import CustomerAddWrapper from "../Screens/Customers/Add/CustomerAddWrapper";
import CustomerListWrapper from "../Screens/Customers/List/CustomerListWrapper";
import CustomerEditWrapper from "../Screens/Customers/Edit/CustomerEditWrapper";
import ProjectLayout from "../Layout/ProjectLayout";
import ProductListWrapper from "../Screens/Products/List/ProductListWrapper";
import RegisterWrapper from "../Screens/Register/RegisterWrapper";
import ProductAddWrapper from "../Screens/Products/Add/ProductAddWrapper";
import ProductEditWrapper from "../Screens/Products/Edit/ProductEditWrapper";
// import Hourglass from "../Components/Molecule/Skeleton/TableSkeleton";

const pageRoute = createBrowserRouter([
    {
        path: '/',
        element: <LoginWrapper />
    },
    {
        path: '/register',
        element: < RegisterWrapper/>
    },
    {
        path: '/admin',
        element: <ProjectLayout />
    },


    {
        path: '/customer',
        element: <CustomerListWrapper />,
        children: ([
            {
                path: 'add-customer',
                element: <CustomerAddWrapper />
            },
            {
                path: 'edit-customer/:id',
                element: <CustomerEditWrapper />
            },
        ])
    },
    {
        path:'/products',
        element:<ProductListWrapper/>,
        children:([
            {
                path:'add-product',element:<ProductAddWrapper/>
            },
            {
                path:'edit-product/:id',element:<ProductEditWrapper/>
            }
        ])
    },
]);

const Route = () => {
    return (
        <RouterProvider router={pageRoute} />
    );
}

export default Route;
