import React from 'react'
import AtmTextField from '../../../Components/atoms/Input/AtmTypeText/AtmTextField'
import AtmButtonField from '../../../Components/atoms/Button/AtmButtonField'

type Props = {}

const ProductAddWrapper = (props: Props) => {
  return (
    <div>
        <h1>Products</h1>
        <AtmTextField
        name='name'
        onBlur={handelbur}
        onChange={henleChange}
        label='Product name'
        />
        <AtmTextField
        name='sellingPrice'
        onBlur={h}
        onChange={h}
        label='Product selling price'
        />
        <AtmTextField
        name='productCode'
        onBlur={}
        onChange={}
        label='Product Code'
        />
        <AtmButtonField
        label='save product'
    </div>
  )
}

export default ProductAddWrapper