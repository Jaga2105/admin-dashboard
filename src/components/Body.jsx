import React from 'react'
import SideBar from './SideBar'
import Content from './Content'

const Body = ({toggleMenu}) => {
  return (
    <div className='flex mt-28'>
        <SideBar toggleMenu={toggleMenu}/>
        <Content toggleMenu={toggleMenu}/>
    </div>
  )
}

export default Body