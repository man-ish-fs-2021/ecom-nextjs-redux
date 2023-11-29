import { Star } from 'lucide-react'
import React from 'react'

const Rating = ({rate}: {rate: number}) => {
  return (
    <div className="flex items-center">
    <Star className="h-4" />
    <div>{rate}</div>
  </div>
  )
}

export default Rating