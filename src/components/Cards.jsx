
import { CiGrid41 } from "react-icons/ci";
import { PiHexagonLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
const Cards = () => {


  return (
    <div>
      <div className="flex mb-10 flex-col md:flex-row md:justify-between md:items-center gap-4">

  <h2 className="text-2xl font-semibold">
    Invoice
  </h2>

  <div className="block md:flex gap-3">
    <button className="px-4 text-sm font-semibold text-[Grey] py-2 bg-white rounded-2xl w-full md:w-[190px] h-[48px] capitalize mb-6 md:mb-0">
  SEE WHAT'S NEW
    </button>
    <button className="px-[40px] py-[8px] bg-[#003EFF] text-white w-full md:w-[190px] h-[48px] rounded-2xl">
    Create
    </button>
  </div>

</div>

 <div className="w-full px-4 py-4">
  <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
    {/* Card 1 */}
    <div className="bg-white p-5 rounded-2xl shadow flex flex-col gap-3">
      <CiGrid41 className="text-2xl text-gray-700" />
      <div className="flex items-center gap-3">
        <p className="text-gray-500 text-xs">TOTAL PAID</p>
        <span className="h-10 w-12 rounded-[24px] flex items-center justify-center text-xs font-semibold bg-[#B6FDD3]">
          1,289
        </span>
      </div>
      <h2 className="text-2xl font-bold">$4,120,102.76</h2>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-5 rounded-2xl shadow flex flex-col gap-3">
      <CiGrid41 className="text-2xl text-gray-700" />
      <div className="flex items-center gap-3">
        <p className="text-gray-500 text-xs">TOTAL OVERDUE</p>
        <span className="h-10 w-12 rounded-[24px] flex items-center justify-center text-xs font-semibold bg-[#FFB7BD]">
          13
        </span>
      </div>
      <h2 className="text-2xl font-bold">$23,000.13</h2>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-5 rounded-2xl shadow flex flex-col gap-3">
      <CiGrid41 className="text-2xl text-gray-700" />
      <div className="flex items-center gap-3">
        <p className="text-gray-500 text-xs">TOTAL DRAFT</p>
        <span className="h-10 w-12 rounded-[24px] flex items-center justify-center text-xs font-semibold bg-[#D9D9E0]">
          08
        </span>
      </div>
      <h2 className="text-2xl font-bold">$12,200.00</h2>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-5 rounded-2xl shadow flex flex-col gap-3">
      <CiGrid41 className="text-2xl text-gray-700" />
      <div className="flex items-center gap-3">
        <p className="text-gray-500 text-xs">TOTAL UNPAID</p>
        <span className="h-10 w-12 rounded-[24px] flex items-center justify-center text-xs font-semibold bg-[#F8E39B]">
          06
        </span>
      </div>
      <h2 className="text-2xl font-bold">$87,102.00</h2>
    </div>
  </div>
</div>



    <div className="w-full py-10 px-4 md:px-0 md:max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-[#003EFF] text-white rounded-2xl shadow p-5 flex flex-col items-start">
      <img src="/card1.png" alt="Card 1" className="w-20 h-16 object-cover mb-3" />
      <h3 className="text-xl font-semibold">Create New Invoice</h3>
      <p className="text-sm">Create new invoices easily</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow p-5 flex flex-col items-start">
      <PiHexagonLight size={75} />
      <h3 className="text-xl font-semibold mt-2">Change Invoice settings</h3>
      <p className="text-[#697598] text-sm">Customise your invoices</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow p-5 flex flex-col items-start">
      <GoPerson size={75} />
      <h3 className="text-xl font-semibold mt-2">Manage Customer list</h3>
      <p className="text-[#697598] text-sm font-normal">Add and remove customers</p>
    </div>
  </div>
</div>


    </div>
  )
}

export default Cards