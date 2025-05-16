import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-32 flex justify-between items-center px-20 bg-sky-700">
      <div className=" w-[40%]">
        <h1 className="text-2xl text-center">WorkManager</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque,
          praesentium laboriosam reiciendis qui aut. Nostrum nulla excepturi
          fugiat 
        </p>
      </div>
      <div className="">
        <ul>
            <li>Important Links</li>
            <li>Instagram</li>
            <li>Facebook</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
