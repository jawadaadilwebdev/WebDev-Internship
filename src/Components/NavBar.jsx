import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full h-21.5   flex justify-center items-center">
      <nav className="w-[86%] flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img src="assets/logo-symbol.png" alt="" />
          <h3 className="text-[#8CB7F5] font-semibold text-2xl">Brand</h3>
        </div>


        <div className="flex w-full h-10 max-w-2xl border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 px-4 py-2 border-none focus:outline-none"
      />
      <select className="border-l border-gray-300 bg-white focus:outline-none">
        <option>All category</option>
      </select>
      <button
        className=" text-white px-6 border-gray-300"
        style={{
          background: 'linear-gradient(to right, #127FFF, #0067FF)'
        }}
      >
        Search
      </button>
    </div>

        
        <div className="flex gap-4.5">
          <div className="flex flex-col items-center">
            <IoPersonSharp className="text-[#979797] text-[22px]" />
            <p className="text-[#979797] text-[14px]">Profile</p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineMessage className="text-[#979797] text-[22px]" />
            <p className="text-[#979797] text-[14px]">Messages</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeart className="text-[#979797] text-[22px]" />
            <p className="text-[#979797] text-[14px]">Orders</p>
          </div>
          <div className="flex flex-col items-center">
            <FaShoppingCart className="text-[#979797] text-[22px]" />
            <p className="text-[#979797] text-[14px]">My Cart</p>
          </div>
        </div>
      </nav>
    </div>
    
  );
};

export default NavBar;
