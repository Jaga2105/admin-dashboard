import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Body from '../components/Body';
const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu)
  return (
    <div className='relative'>
      <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} style={{zIndex:1}}/>
      <Body toggleMenu={toggleMenu} style={{zIndex:2}}/>
    </div>
  )
}

export default Home