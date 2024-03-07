
import axios from "axios"


const GetCoins = async()=>{
  try{
    const response=await axios.get('https://api.coingecko.com/api/v3/search/trending');
    const coins = response.data.coins;
    // console.log(coins);
    return coins;
  
} catch{
  console.error("Error fetching coins:", error);
  return []; // Return an empty array if there's an error
}
}        


export {
  GetCoins
}
