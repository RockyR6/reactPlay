import React from "react";

const ProfileDetails = () => {
  return (
    <div className="bg-yellow-400 min-h-screen w-full border-black flex">
      <div className="bg-yellow-500 rounded-2xl h-100 w-40 ml-10 mt-20 shadow-xl"></div>
      <div className="bg-white h-100 w-100 shadow-xl -ml-10 mt-20 rounded-r-2xl"></div>
      <div className="h-50 w-50 absolute shadow-2xl transition-all ml-25 mt-30">
        <img className="relative hover:z-50 transition-all duration-300"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMFTFjYCu6HWnfspcstISJx39q5Ur1F936Q&s"
        alt=""
      />
      <div className="flex flex-row h-10">
        <div className=" w-60 bg-black text-white"></div>
      <div className="bg-yellow-600 w-30"></div>
      </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
