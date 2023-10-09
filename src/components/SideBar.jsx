import React from 'react'
import { LiaHomeSolid } from "react-icons/lia"
import { MdOutlineManageAccounts } from "react-icons/md"
import { BiLogIn } from "react-icons/bi"
import { BsFillPersonPlusFill } from "react-icons/bs"
import { MdErrorOutline } from "react-icons/md"
import { GoTypography } from "react-icons/go"
import { TbIcons } from "react-icons/tb"
import { LiaCreditCardSolid } from "react-icons/lia"
import { FaTable } from "react-icons/fa"
import { TbLayout2 } from "react-icons/tb"
import SideBarModal from './modals/SideBarModal'

const SideBar = ({toggleMenu}) => {
    const iconStyle = {
        fontSize: '25px',
        color: 'gray-400'
    }
    
  return (
    <>
    {toggleMenu ?
     <SideBarModal/>
    : 
    <div className={`pr-4 h-[564px] hover:overflow-y-scroll z-2 xl:block ${toggleMenu ? "block w-1/4 absolute top-0 backdrop-blur-lg" : "hidden w-1/5 fixed"}`}>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <LiaHomeSolid style={iconStyle}/>
            <span className='text-xl ml-4'>Dashboard</span>
        </div>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <MdOutlineManageAccounts style={iconStyle}/>
            <span className='text-xl ml-4'>Account Settings</span>
        </div>
        <div className='relative'>
            <hr className='my-6' />
            <span className='absolute text-sm -top-2.5 left-4 bg-white px-3 text-gray-400'>PAGES</span>
        </div>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <BiLogIn style={iconStyle}/>
            <span className='text-xl ml-4'>Login</span>
        </div>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <BsFillPersonPlusFill style={iconStyle}/>
            <span className='text-xl ml-4'>Register</span>
        </div>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <MdErrorOutline style={iconStyle}/>
            <span className='text-xl ml-4'>Error</span>
        </div>
        <div className='relative'>
            <hr className='my-6' />
            <span className='absolute text-sm -top-2.5 left-4 bg-white px-3 text-gray-400'>USER INTERFACE</span>
        </div>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <GoTypography style={iconStyle}/>
            <span className='text-xl ml-4'>Typography</span>
        </div>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <TbIcons style={iconStyle}/>
            <span className='text-xl ml-4'>Icons</span>
        </div>
        <div className="flex  pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <LiaCreditCardSolid style={iconStyle}/>
            <span className='text-xl ml-4'>Cards</span>
        </div>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <FaTable style={iconStyle}/>
            <span className='text-xl ml-4'>Tables</span>
        </div>
        <div className="flex pl-6 py-3 mb-2 rounded-r-full cursor-pointer hover:bg-gray-100">
            <TbLayout2 style={iconStyle}/>
            <span className='text-xl ml-4'>Form Layouts</span>
        </div>
    </div>}
    
    </>
    
  )
}

export default SideBar