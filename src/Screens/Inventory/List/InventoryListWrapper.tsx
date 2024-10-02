import InventoryList from './InventoryList'
import { Form, Formik } from 'formik'

type Props = {}

const InventoryListWrapper = () => {
    
    return (
        <div>
            <Formik initialValues={}
            onSubmit={}
            validationSchema={
                
            }>
                {() => (
                    <Form>
                        <InventoryList inventoryData={} deleteInventory={' '} isLoading={' '} />

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default InventoryListWrapper