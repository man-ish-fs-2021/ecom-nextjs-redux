import Link from 'next/link'
import React from 'react'
import { Button } from '..'
import { ArrowBigLeft } from 'lucide-react'

const EmptyCart = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
    <div className="flex text-5xl font-bold text-primary">
      Your cart is Empty!
    </div>
    <div>
      <Link href="/">
        <Button variant="ghost" className="flex py-6">
          <ArrowBigLeft />
          Go back{" "}
        </Button>
      </Link>
    </div>
  </div>
  )
}

export default EmptyCart