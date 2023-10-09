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


const Content = ({toggleMenu}) => {
  const iconStyle = {
    fontSize: '25px',
    color: 'gray-400'
}
  return (
    <div className={`px-6 z-2 xl:ml-[340px]`}>
        {/* <div className="content-scroll" style={{ overflowY: 'auto', maxHeight: '100%' }}> */}
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
        {/* </div> */}
    </div>
  )
}

export default Content