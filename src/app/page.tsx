'use client'
import React, { useState } from 'react'


const page = () => {
  const [task, setTask] = useState('')
  const [status, setStatus] = useState('pending')


  

  return (
    <div>


      <div className='flex justify-center mt-[50px]'>

        <input className=' border-2 ' type="text" name="" id="" value={task} onChange={(e) => setTask(e.target.value)}/>



        <select name="options" id="options" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="complete">complete</option>
          <option value="pending">pending</option>
          <option value="later">later</option>
        </select>
      </div>


      <div>



      </div>






















      <div>


      </div>




      <div>


      </div>

    </div>
  )
}

export default page


