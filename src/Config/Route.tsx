import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "../Screens/Login/LoginWrapper";
import CustomerAddWrapper from "../Screens/Customers/Add/CustomerAddWrapper";
import CustomerListWrapper from "../Screens/Customers/List/CustomerListWrapper";
import CustomerEditWrapper from "../Screens/Customers/Edit/CustomerEditWrapper";
import ProjectLayout from "../Layout/ProjectLayout";
import ProductListWrapper from "../Screens/Products/List/ProductListWrapper";
import ProductAddWrapper from "../Screens/Products/Add/ProductAddWrapper";
import ProductEditWrapper from "../Screens/Products/Edit/ProductEditWrapper";
import DeshBoard from "../Screens/DeshBoard/DeshBoard";
import WithoutLogin from "../Components/Molecule/Auth/WithoutLogin";
import Auth from "../Components/Molecule/Auth/Auth";
import InvoiceListWrapper from "../Screens/Invoice/List/InvoiceListWrapper";
import AddInvoiceWrapper from "../Screens/Invoice/Add/AddInvoiceWrapper";
import ShowInviceWrapper from "../Screens/Invoice/Invoice/ShowInviceWrapper";
import EditInvoiceWrapper from "../Screens/Invoice/Edit/EditInvoiceWrapper";
import CategoryListFormWrapper from "../Screens/Category/List/CategoryListFormWrapper";
import EditCategoryWrapper from "../Screens/Category/Edit/EditCategoryWrapper";
import AddCategoryWrapper from "../Screens/Category/Add/AddCategoryWrapper";

const pageRoute = createBrowserRouter([
    {
        path: '/',
        element: <WithoutLogin><LoginWrapper /></WithoutLogin>
    },

    {
        path: '/admin',
        element: <Auth><ProjectLayout /></Auth>,

        children: [
            {
                path: 'deshBord', element: <DeshBoard />
            },

            {
                path: 'customer',
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
                path: 'products',
                element: <ProductListWrapper />,
                children: ([
                    {
                        path: 'add-product', element: <ProductAddWrapper />
                    },
                    {
                        path: 'edit-product/:id', element: <ProductEditWrapper />
                    }
                ])
            },
        {
            path:'invoice',element:<InvoiceListWrapper/>,
            children: [
                {
                    path:'add-invoice',element:<AddInvoiceWrapper/>
                },
                {
                    path:'edit-invoice/:id',element:<EditInvoiceWrapper/>
                },
                {
                    path:'show-invoice/:id',element:<ShowInviceWrapper/>
                },
            ]
        },
        {
            path:'category',element:<CategoryListFormWrapper/>,
            children:([
                {
                    path:'add-category',element:<AddCategoryWrapper/>
                },
                {
                    path:'edit-category/:id',element:<EditCategoryWrapper/>
                },
               
            ])
        }
        
        ]
    },
]);

const Route = () => {
    return (
        <RouterProvider router={pageRoute} />
    );
}

export default Route;
