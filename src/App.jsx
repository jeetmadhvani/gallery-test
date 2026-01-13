import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {ChevronRight, ChevronLeft} from 'lucide-react'
import Card from './components/Card'

const App = () => {

  const [index, setIndex] = useState(1)
  const [userData, setuserData] = useState([])

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setuserData(response.data)
  }

  useEffect(function(){
    getData()
  }, [index])

  let defaultData = "..."

  if(userData.length > 0){
    defaultData = userData.map(function(elem, idx){
      return <div key={idx} className='group hover:scale-105 hover:-translate-y-3 active:translate-y-2 active:scale-95 transition-all duration-200'>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='h-screen w-full bg-[#1e1e1e] text-white p-15 overflow-auto flex flex-col gap-8 items-center'>
      <h1 className='text-4xl font-medium'>My Photos</h1>
      <div className='mt-10 h-[85%] flex flex-wrap gap-6 justify-center items-center font-bold text-3xl'>
        {defaultData}
      </div>
      <div className='flex gap-2 justify-center items-center bottom-10'>
        <button className='hover:scale-105 active:scale-95 hover:text-gray-400 transition-all duration-200 cursor-pointer' onClick={()=>{
          if(index > 1){
            setIndex(index - 1)
            setuserData([])
          }
        }}><ChevronLeft size={50}/></button>
        <h1 className='font-medium text-2xl'>{index}</h1>
        <button className='hover:scale-105 active:scale-95 hover:text-gray-400 transition-all duration-200 cursor-pointer' onClick={()=> {
          setIndex(index + 1)
          setuserData([])
        }}><ChevronRight size={50} /></button>
      </div>
    </div>
  )
}

export default App
