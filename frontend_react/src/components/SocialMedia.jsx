import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/azamjon-akbaraliev-78372a184/'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/akbaraliyev.azamjon'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://github.com/Akbaraliii?tab=repositories'>
          <BsGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
