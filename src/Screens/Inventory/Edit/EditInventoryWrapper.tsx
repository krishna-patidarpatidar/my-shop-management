import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InventoryForm from '../Layout/InventoryForm';

type EditInventoryWrapperProps = {
    inventoryItem: { id: string; name: string; quantity: number; price: number };
};

const EditInventoryWrapper: React.FC<EditInventoryWrapperProps> = ({ inventoryItem }) => {
    const initialValues = {
        name: inventoryItem.name,
        quantity: inventoryItem.quantity.toString(),
        price: inventoryItem.price.toString()
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Product Name is required'),
        quantity: Yup.number().required('Quantity is required').positive().integer(),
        price: Yup.number().required('Price is required').positive()
    });

    const handleSubmit = async (values: typeof initialValues) => {
        await updateInventoryItem(inventoryItem.id, values);
        alert('Inventory item updated successfully!');
    };

    return (
        <div>
            <h1 className="text-2xl mb-4">Edit Inventory Item</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ handleSubmit, ...formikProps }) => (
                    <Form onSubmit={handleSubmit}>
                        <InventoryForm formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditInventoryWrapper;
