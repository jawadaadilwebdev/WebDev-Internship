import React from 'react'

const CategoryProducts = ({Items,name,home}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-[86%] mt-6 bg-white rounded-xl border border-gray-200">
  {/* Left Feature Card */}
  <div className={`lg:col-span-4 ${home ? "homebg" : "electronicbg"}`}>
    <div className="h-full rounded-lg p-6 flex flex-col justify-between">
  <div>
    <h2 className="text-2xl font-semibold">{name}</h2>
    <button className="mt-6 px-6 py-3 bg-white rounded-md text-sm font-medium">
      Source now
    </button>
  </div>
</div>

  </div>

  {/* Right Cards Grid */}
  <div className="lg:col-span-8 ">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {Items.map((item) => (
    <div
      key={item.id}
      className="p-4 flex justify-between items-start"
    >
      <div>
        <h4 className="text-sm font-medium">{item.title}</h4>
        <p className="text-xs text-gray-500">From</p>
        <p>USD{item.price}</p>
      </div>

      <img
        src={item.image}
        alt={item.price}
        className="w-14 h-14 object-contain"
      />
    </div>
  ))}
</div>

  </div>
</div>

  )
}

export default CategoryProducts