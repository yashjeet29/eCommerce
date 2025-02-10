import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>The UEFA Champions League is an annual club association football competition 
            organised by the Union of European Football Associations that is contested by top-division 
            European clubs. The competition begins with a round robin league phase to qualify for the double-legged 
            knockout rounds, 
            and a single-leg final.</p>
            <p>
            The UEFA Champions League is an annual club association football competition 
            organised by the Union of European Football Associations that is contested by top-division 
            European clubs. The competition begins with a round robin league phase to qualify for the double-legged 
            knockout rounds, 
            and a single-leg final.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox