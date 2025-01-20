import React, { useEffect } from 'react'
import { FSWatcher } from 'vite'

function Github() {
  useEffect (() =>{
 fatch ('https://github.com/hafizmujeeb')
  
  },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4  text-3xl'>
      GitHub Followers: 
    </div>
  )
}

export default Github
