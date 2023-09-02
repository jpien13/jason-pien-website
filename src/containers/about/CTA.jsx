import React from 'react'
import HRDResume from '/../../assets/HRD-Resume.pdf'
import SWEResume from '/../../assets/SWE-Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={SWEResume} download className='btn'>Software Resume</a>
        <a href={HRDResume} download className='btn'>Hardware Resume</a>
    </div>
  )
}

export default  CTA
