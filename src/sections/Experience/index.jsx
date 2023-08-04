import { faGithub,faInstagram,faMedium,faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import twicthImage from "../../assets/IMG_4852.png"
import Mytattoo from '../../assets/03-2.jpg'
import { useState } from "react";
import Myjoke from '../../assets/119154825_350781286045714_3987262109995634290_n.jpg'
import Myjokev2 from '../../assets/124164908_866715257322855_2932556052423212485_o.jpg'
const Experience = () => {
    const [mouseEnter,setMouseEnter] = useState(false);
     return(
        <div className="py-6">
            <div className="text-primaryBase font-medium">Experience</div>
        <div className=" grid grid-cols-[25%_75%] duration-500 hover:bg-gray-700 rounded-xl "
        onMouseEnter={() =>  setMouseEnter(true)}
        onMouseLeave={() =>  setMouseEnter(false)}>
            
        <div className="m-2">
        <div>2022-2023</div>
        <div>
            <img src={twicthImage} className=" m-2 w-5/6 rounded-xl"/>
        </div>
        </div>
        <div className="flex flex-col gap-5 m-2">
        <div className={`${mouseEnter?" text-primaryElse":""}`}>My twitch</div>
        <div className={`flex gap-7 text-xl${mouseEnter?" text-primaryElse":""}`}>
        <a href="https://github.com/salmonnz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent  duration-1000" icon={faGithub}/>
            </a>
            <a href="https://www.twitch.tv/bamjamin_bunny" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent  duration-1000" icon={faTwitch}/>
            </a>
            

        </div>
        <div className={`${mouseEnter?" text-primaryElse":""}`}>You wrap around me and you give me life
And that's why night after night
I'll be fuckin' you right</div>
        <div className="flex gap-x-5">
        <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle ">React</div>
        <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle ">Tailwindcss</div>
        </div>
        </div>
        </div>

        <div className=" mt-5 grid grid-cols-[25%_75%] duration-500 hover:bg-gray-700 rounded-xl"
        onMouseEnter={() =>  setMouseEnter(true)}
        onMouseLeave={() =>  setMouseEnter(false)}
        >
        <div className="m-2">
        <div cla>2022-2023</div>
        <div>
            <img src={Mytattoo} className="m-5 rounded-full h-24 w-24"/>
        </div>
        </div>
        <div className="flex flex-col gap-5 m-2">
        <div className={`${mouseEnter?" text-primaryElse":""}`}>My tattoo</div>
        <div className={`flex gap-7 text-xl${mouseEnter?" text-primaryElse":""}`}>
        <a href="https://github.com/salmonnz/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent  duration-1000" icon={faGithub}/>
            </a>
            <a href="https://www.instagram.com/bamtaesei/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent  duration-1000" icon={faInstagram}/>
            </a>
            
        </div>
        <div className={`${mouseEnter?" text-primaryElse":""}`}>Monday, Tuesday, Wednesday, Thursday, Friday
Saturday, Sunday a week</div>
        <div className="flex gap-x-5">
        <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle ">React</div>
        <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle ">Tailwindcss</div>

        {/* 2paragrah */}
        </div>
        </div>
        </div>
        Project
        <div className=" grid grid-cols-[25%_75%] duration-500 hover:bg-gray-700 rounded-xl "
        onMouseEnter={() =>  setMouseEnter(true)}
        onMouseLeave={() =>  setMouseEnter(false)}>
            
        <div className="m-2">
        <div>2022-2023</div>
        <div>
            <img src={Myjoke} className=" m-2 w-5/6 rounded-xl"/>
        </div>
        </div>
        <div className="flex flex-col gap-5 m-2">
        <div className={`${mouseEnter?" text-primaryElse":""}`}>Joke</div>
        <div className={`flex gap-7 text-xl${mouseEnter?" text-primaryElse":""}`}>
        <a href="https://github.com/salmonnz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent  duration-1000" icon={faGithub}/>
            </a>
            <a href="https://www.twitch.tv/bamjamin_bunny" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent  duration-1000" icon={faTwitch}/>
            </a>
            

        </div>
        <div className={`${mouseEnter?" text-primaryElse":""}`}>You wrap around me and you give me life
And that's why night after night
I'll be fuckin' you right</div>
        <div className="flex gap-x-5">
        <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle ">React</div>
        <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle ">Tailwindcss</div>
        </div>
        </div>
        </div>
        <div className=" mt-5 grid grid-cols-[25%_75%] duration-500 hover:bg-gray-700 rounded-xl"
        onMouseEnter={() =>  setMouseEnter(true)}
        onMouseLeave={() =>  setMouseEnter(false)}
        >
        <div className="m-2">
        <div cla>2022-2023</div>
        <div>
            <img src={Myjokev2} className="m-5 rounded-full h-24 w-24"/>
        </div>
        </div>
        <div className="flex flex-col gap-5 m-2">
        <div className={`${mouseEnter?" text-primaryElse":""}`}>JokeV2</div>
        <div className={`flex gap-7 text-xl${mouseEnter?" text-primaryElse":""}`}>
        <a href="https://github.com/salmonnz/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent  duration-1000" icon={faGithub}/>
            </a>
            <a href="https://www.instagram.com/bamtaesei/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent  duration-1000" icon={faInstagram}/>
            </a>
            
        </div>
        <div className={`${mouseEnter?" text-primaryElse":""}`}>Monday, Tuesday, Wednesday, Thursday, Friday
Saturday, Sunday a week</div>
        <div className="flex gap-x-5">
        <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle ">React</div>
        <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle ">Tailwindcss</div>

        
        </div>
        </div>
        </div>
        

        </div>

        

        




     )


}
export default Experience;