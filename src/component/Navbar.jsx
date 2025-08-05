import Image from 'next/image'
import React from 'react'
import OpenPopup from './Openpopup'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center bg-gray-200 p-2 text-white'>
        <div>
            <Image src={`/assets/logoo.png`} alt='' height={100} width={100}/>
        </div>
        <div>
            <OpenPopup/>
        </div>
    </div>
  )
}

export default Navbar