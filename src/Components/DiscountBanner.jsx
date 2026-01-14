import React from 'react'

const DiscountBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-10 text-white">
        <div>
          <h3 className="text-lg font-semibold">
            Super discount on more than 100 USD
          </h3>
          <p className="text-sm text-blue-100">
            Have you ever finally just write dummy info
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-md text-sm font-semibold">
          Shop now
        </button>
      </div>
  )
}

export default DiscountBanner