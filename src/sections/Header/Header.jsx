import fileHuaDoor from  '../../assets/Piyapat_Resume_02.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faPhone} from '@fortawesome/free-solid-svg-icons'
import { data } from '../../component/content/header'

import React, { useEffect, useRef } from 'react';

const Header = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    animateName();
  }, []);

  const animateName = () => {
    const nameElement = nameRef.current;
    const nameText = nameElement.textContent;
    const letters = nameText.split('');

    nameElement.textContent = '';

    letters.forEach((letter, index) => {
      setTimeout(() => {
        nameElement.textContent += letter;
      }, 100 * index); 
    });
  };

  return (
    <div>
      <div className='text-3xl text-primaryTitle font-semibold' ref={nameRef}>
        {data.name}
      </div>
      <div className='text-primaryElse font-semibold'>{data.title}</div>
      <div className='text-sm'>{data.caption}</div>
      <div className='mt-10'>
        <a className='' href={fileHuaDoor}>
          <span className='rounded-md bg-primarySubTitle text-primaryBase py-2 px-4'>
            {data.buttontext}
            <span className='rotate-90 inline-block ml-2 text-sm'>
              <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
