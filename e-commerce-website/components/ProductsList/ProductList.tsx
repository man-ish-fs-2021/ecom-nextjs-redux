import { Products } from '@/constants/data'
import React from 'react'
import { ProductCard } from '..'
interface ProductsListProps {
    apiData: Products
}

const ProductList = ({apiData}: ProductsListProps) => {
  return (
    <div className='flex flex-wrap gap-3'>
        {apiData.apiData.map((each) => <ProductCard key={each.id} data={each} />)}
    </div>
  )
}

export default ProductList