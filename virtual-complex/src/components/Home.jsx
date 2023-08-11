import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigatefashion =useNavigate()

  function choosefashion(){
    navigatefashion("/fashion")
  }

  const navigatetv =useNavigate()

  function choosetv(){
    navigatetv("/tv")
  }

  const navigatekitchen =useNavigate()

  function choosekitchen(){
    navigatekitchen("/kitchen")
  }

  const navigatemobile =useNavigate()

  function choosemobile(){
    navigatemobile("/mobile")
  }

  const navigatefurniture =useNavigate()

  function choosefurniture(){
    navigatefurniture("/furniture")
  }

  const navigategrocery =useNavigate()

  function choosegrocery(){
    navigategrocery("/grocery")
  }

         
  return (
    <>
    <Navbar/>
    <div className='min-h-[18.4vh] py-5'>
  
        <div className='flex justify-around px-10'>
            <button onClick={choosefashion}>
                <Box1 src="https://images.livemint.com/img/2023/03/14/1200x900/FASHION-INDIA-LAKME-MAN__1678773836923_1678773837051_1678773837051.jpg" pname="Fashions"/>
            </button>

            <button>
                <Box2 onClick={choosetv} src="https://media.istockphoto.com/id/952839420/photo/home-appliancess-set-of-household-kitchen-technics-in-the-new-appartments-or-kitchen-e.jpg?s=612x612&w=0&k=20&c=hbtJG0OOGz_K4NVazvytWF489DimY_HrLdv2b1-I0KA=" pname="TVs & Appliances"/>
            </button>

            <button>
                <Box3 onClick={choosekitchen} src="https://media.designcafe.com/wp-content/uploads/2020/06/09015014/kitchen-decor-and-decorating-ideas-for-your-home.jpg" pname="Home & Kitchen"/>
            </button>
        </div>

        <div className='flex justify-around px-10'>
            <button>
                <Box1 onClick={choosemobile} src="https://media.istockphoto.com/id/1465848067/photo/tablet-and-smartphone-with-blank-screen.webp?b=1&s=170667a&w=0&k=20&c=zH-91qkfizKduPZg8miYVbOGEO7F5G16S7GnWcIF8Ec=" pname="Mobiles & Tablets"/>
            </button>

            <button>
                <Box2 onClick={choosefurniture} src="https://media.istockphoto.com/id/1285065780/photo/furniture-showroom-with-plants-spotlights-and-brick-wall.jpg?s=612x612&w=0&k=20&c=5X2jXOu4kAEW978_fNmdLGcnyqFjyl06Z-WDlX_FDVU=" pname="Furniture"/>
            </button>

            <button>
                <Box3 onClick={choosegrocery} src="https://howmuch-pk.s3.ap-southeast-1.amazonaws.com/blogs/18/original/howmuch.pk-online-grocery-shopping-cart.jpg" pname="Grocery"/>
            </button>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Home
