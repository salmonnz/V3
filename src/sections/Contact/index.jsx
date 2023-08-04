import React from 'react';
import { faFacebook, faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Contact = () => {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const phoneNumber = '0909219980';
  
    const handleMouseEnter = () => {
      setShowPhoneNumber(true);
    };
  
    const handleMouseLeave = () => {
      setShowPhoneNumber(false);
    };
  return (
    <div className='flex items-end gap-10'>
      <a href="https://github.com/salmonnz" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='hover:text-5xl hover:text-primaryElse duration-1000' icon={faGithub} />
      </a>
      <a href="https://www.facebook.com/bam.taesei" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='hover:text-5xl hover:text-primaryElse duration-1000' icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/bamtaesei" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='hover:text-5xl hover:text-primaryElse duration-1000' icon={faInstagram} />
      </a>
      <a href="https://line.me/ti/p/yS_DYiP6oH?fbclid=IwAR0QeL01RSOE2P7_RbkmYk6M8lMGdZKofzExoZCRHngf8yS95ByhXugxG_U" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='hover:text-5xl hover:text-primaryElse duration-1000' icon={faLine} />
      </a>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <FontAwesomeIcon className='hover:text-5xl hover:text-primaryElse duration-1000' icon={faPhone} />
        {showPhoneNumber && <span>{phoneNumber}</span>}
        
      </div>
      
    </div>
  );
};


export default Contact;
