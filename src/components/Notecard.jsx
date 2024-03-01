import { RiDeleteBin2Fill, RiEdit2Fill, RiHeart2Fill } from "@remixicon/react";
import React, { useState } from "react";

const Notecard = () => {
    const [fav, setFav] = useState(false)

    const toggleFav = () => {
        fav == false ? setFav(true) : setFav(false)  
    }
  return (
    <div className="container flex flex-col border border-black w-[15vw] rounded-lg bg-white overflow-hidden">
      <div className="title bg-blue-500 p-4 text-lg text-white font-bold">I don't know man!!</div>
      <div className="notes bg-white p-4 text-lg">
      The quick brown fox jumps over the lazy dog. Yeah this contains all the alphabets of the English language.        
      </div>
      <div className="icon-container flex justify justify-around text-white items-center py-2 bg-blue-500">
        <RiEdit2Fill size={36}/>
        <RiHeart2Fill onClick={toggleFav} size={36}/>  
        <RiDeleteBin2Fill size={36}/>
      </div>
    </div>
  );
};

export default Notecard;
