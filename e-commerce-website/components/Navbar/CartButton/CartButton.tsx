import { Button } from '@/components'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

const CartButton = () => {
  return (
    <div className="ml-auto pr-4 flex items-center">
    <Button  size="icon">
      <ShoppingBag className="h-8" /> <div className="text-xs">1</div>
    </Button>
  </div>
  )
}

export default CartButton