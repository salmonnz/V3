import Experience from "../Experience";
import About from "./about/about";

const RightSection = () =>{
    return(
        <div className=' space-x-5'>
            <div className="grid grid-flow-col pt-2 px-3 ">

    <span className="">About</span>
    <span>Experience</span>
    <span>Project</span>
    <span>Contact me</span>
    
    </div>
    <About/>
    <Experience/>
    
   
    
    
    
  
   
    </div>

    
 
    )
 
 }
 export default RightSection;