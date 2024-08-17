import React from 'react'
import './index.css'

interface ClassCardProps {
  classTitle: string
}

const ClassCard: React.FC<ClassCardProps> = ({ classTitle }) => {
  return (
    <div className='card'>
      <div className='header'>
        <h1>{classTitle}</h1>
      </div>
      <div className='body'>
        <h2>Course Number</h2>
        <p>CS1113</p>
        <h2>CRN</h2>
        <p>41935</p>
      </div>
      <div className='footer'>
        <h2>Status</h2>
        <h3>Enrolled</h3>
      </div>
    </div>
  )
}

export default ClassCard