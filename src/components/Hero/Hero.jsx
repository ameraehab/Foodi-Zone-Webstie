import bgImg from '../../assets/foodDishes/backgraundHeroSection.png'
import Dish1 from '../../assets/foodDishes/dish-1.png'
import Dish2 from '../../assets/foodDishes/dish-2.png'
import Dish3 from '../../assets/foodDishes/dish-3.png'
import { useState } from 'react'
const ImageList =[
  {
  id:1,
  img: Dish1
},  
{
  id:2,
  img: Dish2    

  }
,{
  id:3,
  img: Dish3  
}
  
];

const bgImage ={
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',  
width:"100%",
height:"100%",

}


const Hero = () => {
  const [imageId , setImageId] = useState();
  return (
    <>
    <div style={bgImage} 
    className='min-h-[500px] sm:min-h-[600px]
     bg-gray-100 dark:bg-gray-950
      dark:text-white duration-200 flex justify-center items-center '

    >
      <div className="container pb-8 sm:pb-0">
 <div className='grid grid-cols-1 sm:grid-cols-2'>
   
 </div>
      </div>

      
    </div>




    </>

  )
}

export default Hero
