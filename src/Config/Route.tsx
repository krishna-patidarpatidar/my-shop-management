import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "../Screens/Login/LoginWrapper";
import CustomerAddWrapper from "../Screens/Customers/Add/CustomerAddWrapper";
import CustomerListWrapper from "../Screens/Customers/List/CustomerListWrapper";
import CustomerEditWrapper from "../Screens/Customers/Edit/CustomerEditWrapper";
import ProjectLayout from "../Layout/ProjectLayout";
import ProductListWrapper from "../Screens/Products/List/ProductListWrapper";
import ProductAddWrapper from "../Screens/Products/Add/ProductAddWrapper";
import ProductEditWrapper from "../Screens/Products/Edit/ProductEditWrapper";
import WithoutLogin from "../Components/Molecule/Auth/WithoutLogin";
import Auth from "../Components/Molecule/Auth/Auth";
import InvoiceListWrapper from "../Screens/Invoice/List/InvoiceListWrapper";
import AddInvoiceWrapper from "../Screens/Invoice/Add/AddInvoiceWrapper";
import ShowInviceWrapper from "../Screens/Invoice/Invoice/ShowInviceWrapper";
import EditInvoiceWrapper from "../Screens/Invoice/Edit/EditInvoiceWrapper";
import CategoryListFormWrapper from "../Screens/Category/List/CategoryListFormWrapper";
import EditCategoryWrapper from "../Screens/Category/Edit/EditCategoryWrapper";
import AddCategoryWrapper from "../Screens/Category/Add/AddCategoryWrapper";
import TransactionsListWrapper from "../Screens/Transactions/List/TransactionsListWrapper";
import AddInventoryWrapper from "../Screens/Inventory/Add/AddInventoryWrapper";
import EditInventoryWrapper from "../Screens/Inventory/Edit/EditInventoryWrapper";
import DashbordWrapper from "../Screens/DeshBoard/DashbordWrapper";
import VenderListWrapper from "../Screens/Vender/List/VenderListWrapper";
import VenderAddWrapper from "../Screens/Vender/Add/VenderAddWrapper";
import VenderEditWrapper from "../Screens/Vender/Edit/VenderEditWrapper";
import CustomerTracsactionWrapper from "../Screens/Customers/Transactions/customerTracsactionWrapper";

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
                path: 'transactions/:id',
                element: <CustomerTracsactionWrapper />
            },
            {
                path: 'vender',
                element: <VenderListWrapper />,
                children: ([
                    {
                        path: 'add-vender',
                        element: <VenderAddWrapper />
                    },
                    {
                        path: 'edit-vender/:id',
                        element: <VenderEditWrapper />
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
                path: 'invoice', element: <InvoiceListWrapper />,

            },
            {
                path: 'invoice/edit-invoice/:id', element: <EditInvoiceWrapper />
            },
            {
                path: 'invoice/show-invoice/:billId', element: <ShowInviceWrapper />
            },
            {
                path: 'invoice/add-invoice', element: <AddInvoiceWrapper />
            },

            {
                path: 'category', element: <CategoryListFormWrapper />,
                children: ([
                    {
                        path: 'add-category', element: <AddCategoryWrapper />
                    },
                    {
                        path: 'edit-category/:id', element: <EditCategoryWrapper />
                    },

                ])
            },
            {
                path: 'transactions', element: <TransactionsListWrapper />
            },
            {
                path: 'inventory', element: <InvoiceListWrapper />,
                children: ([
                    {
                        path: 'add-inventory', element: <AddInventoryWrapper />
                    },
                    {
                        path: 'edit-inventory/:id', element: <EditInventoryWrapper />
                    }
                ])
            },
            {
                path: 'deshbord', element: <DashbordWrapper />
            }

        ]
    },
    // {
    //     path:'/',element:<CustomerListWrapper/>
    // }
]);

const Route = () => {
    return (
        <RouterProvider router={pageRoute} />
    );
}

export default Route;
