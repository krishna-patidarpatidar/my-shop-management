import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "../Screens/Login/LoginWrapper";
import CustomerAddWrapper from "../Screens/Customers/Add/CustomerAddWrapper";
import CustomerListWrapper from "../Screens/Customers/List/CustomerListWrapper";
import CustomerEditWrapper from "../Screens/Customers/Edit/CustomerEditWrapper";
import ProjectLayout from "../Layout/ProjectLayout";

const pageRoute = createBrowserRouter([
    {
        path: '/',
        element: <LoginWrapper />
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
    }
]);

const Route = () => {
    return (
        <RouterProvider router={pageRoute} />
    );
}

export default Route;
