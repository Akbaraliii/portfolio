import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app_social'>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  )
}

export default SocialMedia
