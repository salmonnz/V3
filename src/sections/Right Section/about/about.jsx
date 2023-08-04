import { data } from "../../../component/content/header"
const About = () =>{
    return(
        <div className=' grid mt-20 gap-y-10 '>

       <div className="text-primaryBase font-medium">{data.about}</div>
       <div>Monday, Tuesday, Wednesday, Thursday, Friday
Saturday, Sunday (a week)
Monday, Tuesday, Wednesday, Thursday, Friday
Seven days a week
Every hour, every minute, every second
You know night after night
I'll be fuckin' you right, seven days a week
</div>
       <div>{data.description}</div>
      
        </div>
    
        



    )
}
export default About;