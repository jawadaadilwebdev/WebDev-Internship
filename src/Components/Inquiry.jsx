import React from "react";

const Inquiry = () => {
  return (
    <div className="mt-6 rounded-xl inquirybg w-[86%] h-90 p-8 flex justify-between">
      <div className="w-[55%] flex flex-col p-3 gap-3 text-white">
        <h2 className="text-3xl font-medium">
          An easy way to send <br /> requests to all suppliers
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br />
          elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div className="w-[40%] rounded bg-white p-3">
        <form action="" className="flex flex-col items-start gap-4">
          <h2 className="text-black text-xl font-medium">
            Send quote to suppliers
          </h2>
          <input
            className="border border-[#E4E4E4] p-1 rounded-md outline-0 text-sm placeholder-black w-full"
            type="text"
            placeholder="What item do you need?"
          />
          <textarea
            name=""
            id=""
            className="outline-0 border border-[#E4E4E4] p-1 text-sm w-full rounded-md"
            placeholder="Type more details"
            rows="3"
          ></textarea>
          <div className="flex gap-2">
            <input
              placeholder="Quantity"
              className="placeholder-black outline-0 border border-[#E4E4E4] p-1 rounded-md"
            />
            <select
              name="unit"
              id="unit"
              className="outline-0 border border-[#E4E4E4] p-1 rounded-md"
            >
              <option value="Pcs">Pcs</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white py-1 px-2.5 rounded-md" type="submit">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
