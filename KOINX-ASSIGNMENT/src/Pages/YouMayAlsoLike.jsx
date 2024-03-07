import  {useEffect,useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GetCoins } from '../services/Getcoin';
import YouMayAlsoLikeCard from '../components/YouMayAlsoLikeCard';

const YouMayAlsoLike = () => {
  const [coins, setCoins] = useState([]);
  
  var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      useEffect(() => {
        const fetchCoins = async () => {
            try{
          const coinsData = await GetCoins();
          // console.log("*********")
          // console.log(coinsData);
          setCoins(coinsData);
            } catch(error){
                console.log(error);
            }
        };
        fetchCoins();
    }, []);
      return (
        <div className=' p-8 mt-8 shadow-lg drop-shadow-xl rounded-md'>
        <h2 className="text-2xl font-medium ml-20">You May Also Like</h2>
        <div className="slider-container p-3 relative">
          <Slider {...settings} className='gap-2'>
            {coins.map((coin,index)=>(
                    <YouMayAlsoLikeCard
                    key={index}
                    coinName={coin.item.name}
                    price={coin.item.data.market_cap}
                    logo={coin.item.small}
                    graph={coin.item.data.sparkline}
                    />
            ))}
            </Slider>
        </div>

        <h2 className="text-2xl font-medium ml-20 mt-3">Trending Coins</h2>
        <div className="slider-container p-3 relative">
          <Slider {...settings} className='gap-2'>
            {coins.map((coin,index)=>(
                    <YouMayAlsoLikeCard
                    key={index}
                    coinName={coin.item.name}
                    price={coin.item.data.market_cap}
                    logo={coin.item.small}
                    graph={coin.item.data.sparkline}
                    />
            ))}
            </Slider>
        </div>
        </div>
      );
}





export default YouMayAlsoLike
