import React from 'react'

const Activity = () => {
     const activities = [
        {
          id: 1,
          title: "Invoice creation",
          time: "Yesterday, 12:05 PM",
          message: "Created invoice",
          createdBy: " 00239434/Olaniyi Ojo Adewale"
        },
        {
          id: 2,
          title: "Invoice creation",
          time: "Yesterday, 12:05 PM",
          message: "Created invoice",
          createdBy: " 00239434/Olaniyi Ojo Adewale"
        },
        {
          id: 3,
          title: "Invoice creation",
          time: "Yesterday, 12:05 PM",
          message: "Created invoice",
          createdBy: " 00239434/Olaniyi Ojo Adewale"
        },
        {
          id: 4,
          title: "Invoice creation",
          time: "Yesterday, 12:05 PM",
          message: "Created invoice",
          createdBy: " 00239434/Olaniyi Ojo Adewale"
        },
      ];
  return (
   <div className="space-y-5">
      {activities.map((item) => (
        <div key={item.id} className="flex items-start gap-3">

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <img src="/user.png" alt="" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="font-semibold text-md">{item.title}</p>
            <p className="text-xs text-[#697598]">{item.time}</p>

            <div className="bg-[#F6F8FA] text-gray-700 text-xs p-3 rounded-xl mt-2 border border-gray-200">
             <h2 className="text-[14px]"> <span className="text-[#697598]">
                {item.message}
                </span>
                <span className="font-semibold">
                  {item.createdBy}
                </span></h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Activity