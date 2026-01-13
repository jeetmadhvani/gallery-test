import React from 'react'
import {ExternalLink} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
          <div className='h-45 w-80 bg-white rounded-xl overflow-hidden relative'>
            <div className='h-full w-full bg-white rounded-xl overflow-hidden'>
              <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
            </div>
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 overflow-hidden absolute bottom-0 w-full h-full text-center backdrop-blur-xs flex justify-between bg-black/60 p-4'>
              <h2 className='text-xl font-bold'>{props.elem.author}</h2>
              <p><ExternalLink /></p>
            </div> 
          </div>
        </a>
    </div>
  )
}

export default Card
