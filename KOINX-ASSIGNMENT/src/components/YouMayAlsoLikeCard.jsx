import React from 'react'
const YouMayAlsoLikeCard = ({
  coinName,
  price,
  logo,
  graph
}) => {
  return (
   <div className="shadow-2xl drop-shadow-2xl rounded-md p-4 gap-4 ml-12 mr-12 border border-slate-300">
      <div className=" flex gap-2 items-center">
        <img src={logo} className=" size-8 rounded-full" />
        <div>
          <h3 className="text-black font-semibold">{coinName}</h3>
        </div>
      </div>
      <div>
        <h3 className="text-black font-semibold text-xl pl-2 pt-2">{price}</h3>
        <img src={graph} className="w-28 h-24 rounded-full pl-6" />
      </div>
    </div>
    );
};

export default YouMayAlsoLikeCard;
