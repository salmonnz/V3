import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faPhone} from '@fortawesome/free-solid-svg-icons'
import '../src/index.css'
import "../src/App.css"
import { faFacebook, faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

import LeftSection from './sections/Left Section'
import RightSection from './sections/Right Section'

function App() {
  

  return (
    // burger
  <div className="mx-auto max-w-6xl grid gap-y-4 lg:grid-cols-[40%_60%] m-12 ">
    
    <LeftSection/>
    <RightSection/>
    
  </div>
 
  
 
  )
}

export default App
