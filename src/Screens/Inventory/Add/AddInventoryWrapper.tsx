import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InventoryForm from '../Layout/InventoryForm';

const AddInventoryWrapper: React.FC = () => {
    const initialValues = {
        name: '',
        quantity: '',
        price: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Product Name is required'),
        quantity: Yup.number().required('Quantity is required').positive().integer(),
        price: Yup.number().required('Price is required').positive()
    });

    const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
        // await addInventoryItem(values);
        console.log(values)
        // resetForm();
        // alert('Inventory item added successfully!');
    };

    return (
        <div>
            <h1 className="text-2xl mb-4">Add Inventory Item</h1>
            <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}>
                {({ handleSubmit, ...formikProps }) => (
                    <Form onSubmit={handleSubmit}>
                        <InventoryForm   formikProps={formikProps} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddInventoryWrapper;
