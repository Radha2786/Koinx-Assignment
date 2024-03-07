import React, { useEffect, useState } from 'react'
import { GetCoins } from '../services/Getcoin'

const BottomCard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const coinsData = await GetCoins();
      coinsData?.sort((coin1,coin2)=>{
        return coin1.item.market_cap_rank - coin2.item.market_cap_rank;
      })
      setCoins(coinsData?.slice(0,3));
    };
    fetchCoins();
  }, []);

  return (
  <div className="bg-white shadow-2xl drop-shadow-2xl rounded-md p-4 flex flex-col gap-4 ml-12 mr-12">
      <h2 className="text-black text-2xl font-bold">Trending Coins (24h)</h2>
      {
        coins?.map(
          (coin, index) => {
            return (
              <div key={index} className=" flex gap-2 items-center">
                <img src={coin.item.small} className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-black font-semibold">{coin.item.name}</h3>
                </div>
              </div>
            )
          }
        )
      }
    </div>
    );
};

export default BottomCard
