import Contact from "../Contact"
import Header from "../Header/Header"
import Navbar from "../Navbar"
import React from "react"
import roundImage from '../../assets/123349903_3584471141612773_8335914663452655999_n.jpg'


const LeftSection = () =>{
   return(
    <div className="px-3 mt-2.5">
      <img src={roundImage} alt="รูปฉันเองจ้า" className="rounded-full h-24 w-24" />
      
   bambam
   
   <div className=' sticky top-0 grid gap-y-10 lg:grid-rows-[30%_30%_25%] lg:h-[87vh]'>
   <Header/>
   <Navbar/>
   <Contact/>
  

   </div>
    </div>

   )

}
export default LeftSection;
"flex gap-7 text-xl "