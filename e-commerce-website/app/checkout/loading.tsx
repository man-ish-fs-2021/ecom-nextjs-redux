import React from 'react'
import { Loading } from '@/components'

const loading = () => {
  return (
    <div className="w-full h-full p-8">
    <Loading className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-8 h-full">
      <div className="hidden lg:block">
        <Loading className="w-full h-[500px] rounded-xl" />
      </div>
      <div className="mt-6 lg:col-span-4 lg:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Loading className="aspect-square rounded-xl" />
          <Loading className="aspect-square rounded-xl" />
          <Loading className="aspect-square rounded-xl" />
          <Loading className="aspect-square rounded-xl" />
          <Loading className="aspect-square rounded-xl" />
          <Loading className="aspect-square rounded-xl" />
        </div>
      </div>
    </div>
</div>
  )
}

export default loading