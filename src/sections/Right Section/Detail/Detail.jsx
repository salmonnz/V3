// Experience.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faGithub, faInstagram, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import twicthImage from "../../assets/IMG_4852.png";
import Mytattoo from '../../assets/03-2.jpg';
import Myjoke from '../../assets/119154825_350781286045714_3987262109995634290_n.jpg';
import Myjokev2 from '../../assets/124164908_866715257322855_2932556052423212485_o.jpg';

const Experience = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className="py-6">
      <div className="text-primaryBase font-medium">Experience</div>
      {/* Your existing experience items */}
      {/* ... */}

      {/* Add more experiences here */}
      {/* ... */}

      {/* Detail page */}
      <Link to="/experience-detail">
        <div className="grid grid-cols-[25%_75%] duration-500 hover:bg-gray-700 rounded-xl">
          <div className="m-2">
            <div>2022-2023</div>
            <div>
              <img src={Myjoke} className="m-2 w-5/6 rounded-xl" alt="Joke" />
            </div>
          </div>
          <div className="flex flex-col gap-5 m-2">
            <div className={`${mouseEnter ? "text-primaryElse" : ""}`}>Joke</div>
            <div className={`flex gap-7 text-xl${mouseEnter ? " text-primaryElse" : ""}`}>
              <a href="https://github.com/salmonnz" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent duration-1000" icon={faGithub} />
              </a>
              <a href="https://www.twitch.tv/bamjamin_bunny" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="hover:text-3xl hover:text-primaryContent duration-1000" icon={faTwitch} />
              </a>
            </div>
            <div className={`${mouseEnter ? "text-primaryElse" : ""}`}>
              You wrap around me and you give me life And that's why night after night I'll be fuckin' you right
            </div>
            <div className="flex gap-x-5">
              <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle">
                React
              </div>
              <div className="bg-primaryElse px-2 py-1 rounded-md duration-1000 hover:text-primaryElse hover:bg-primarySubTitle">
                Tailwindcss
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ... */}
    </div>
  );
};

export default Experience;
