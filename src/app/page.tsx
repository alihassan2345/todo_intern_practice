'use client'
import React, { useState } from 'react'


const page = () => {
  const [task, setTask] = useState<string>('')
  const [data, setData] = useState<{ task: string; status: string }[]>([])
  const [status, setStatus] = useState<string>('complete')
  const [color, setColor] = useState<string>('bg-green-600')

  function addTask() {
    const newTask = { task: task, status: status }
    setData([...data, newTask])
    setTask('')
    setStatus('complete')
    setColor('bg-green-600')


  }

  function pendingTasks() {
    return data.filter((item) => item.status === 'pending')
  }

  function completeTasks() {
    return data.filter((item) => item.status === 'complete')
  }

  function LaterTasks() {
    return data.filter((item) => item.status === 'later')
  }



  function color2() {

    if (status === 'pending') {
      return setColor('bg-yellow-600')
    }
    else if (status === 'complete') {
      return setColor('bg-green-600')
    } else {
      return setColor('bg-red-600')
    }
  }



  return (
    <div className='bg-gradient-to-t from-purple-600 to-purple-900 h-screen'>

      <div className='flex justify-center pt-[50px] gap-[30px]'>

        <input className=' border-2 w-[500px] rounded-2xl p-[10px] font-bold ' type="text" name="" placeholder='Enter you todo' id="" value={task} onChange={(e) => setTask(e.target.value)} />



        <select name="options" onClick={color2} className={`${color} rounded-t-md `} id="options" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option className='bg-green-600 ' value="complete">complete</option>
          <option className='bg-yellow-600 ' value="pending">pending</option>
          <option className='bg-red-600 rounded-b-md' value="later">later</option>
        </select>

        <button className='bg-neutral-900 text-white p-[5px] rounded-md' onClick={addTask} >Add Task</button>
      </div>



      <div className='flex justify-around  mt-[90px] '>


        <div className='bg-black w-[300px] rounded-b-2xl h-[400px] overflow-scroll [&::-webkit-scrollbar]:hidden  overflow-x-hidden  '>
          <h1 className='bg-black text-xl font-semibold text-white w-[300px] h-[50px] pt-[10px] pl-[30px]  h-[30px] rounded-t-3xl fixed top-34.5 pt-[5px] '>
            Pending Tasks
          </h1>
          <div className='flex flex-col gap-[10px]  items-center  '>
            {pendingTasks().map((item, index) => (
              <div className='pt-[10px] w-[250px] ' key={index}>
                <h3 className='bg-neutral-800 text-gray-300 p-[10px] pl-[15px] rounded-md'>{item.task} </h3>
              </div>
            ))}
          </div>
        </div>


        <div className='bg-black w-[300px] rounded-b-2xl h-[400px] overflow-scroll [&::-webkit-scrollbar]:hidden  overflow-x-hidden  '>
          <h1 className='bg-black text-xl font-semibold text-white w-[300px] h-[50px] pt-[10px] pl-[30px]  h-[30px] rounded-t-3xl fixed top-34.5 pt-[5px] '>
            Complete Tasks
          </h1>
          <div className='flex flex-col gap-[10px]  items-center  '>
            {completeTasks().map((item, index) => (
              <div className='pt-[10px] w-[250px] ' key={index}>
                <h3 className='bg-neutral-800 text-gray-300 p-[10px] pl-[15px] rounded-md'>{item.task} </h3>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-black w-[300px] rounded-b-2xl h-[400px] overflow-scroll [&::-webkit-scrollbar]:hidden  overflow-x-hidden  '>
          <h1 className='bg-black text-xl font-semibold text-white w-[300px] h-[50px] pt-[10px] pl-[30px]  h-[30px] rounded-t-3xl fixed top-34.5 pt-[5px]  '>
            Later Tasks
          </h1>
          <div className='flex flex-col gap-[10px]  items-center  '>
            {LaterTasks().map((item, index) => (
              <div className='pt-[10px] w-[250px] ' key={index}>
                <h3 className='bg-neutral-800 text-gray-300 p-[10px] pl-[15px] rounded-md'>{item.task} </h3>
              </div>
            ))}
          </div>
        </div>


       


      </div>


    </div>
  )
}

export default page


