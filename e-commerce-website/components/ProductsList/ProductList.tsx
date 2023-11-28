import { Products } from '@/constants/data'
import React from 'react'
interface ProductsListProps {
    apiData: Products
}

const ProductList = ({apiData}: ProductsListProps) => {
  return (
    <div className='flex  flex-wrap'>
        {apiData.apiData.map((each) => <div key={each.id} className='h-10'>{each.title}</div>)}
    </div>
  )
}

export default ProductList