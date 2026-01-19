'use client'
import React, { useState } from 'react'


const page = () => {
  const [task, setTask] = useState<string>('')
  const [data, setData] = useState<{ task: string; status: string }[]>([
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },{ task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },{ task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },{ task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" },
    { task: "task", status: "complete" }
    
  ])
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
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 h-screen'>

      <div className='flex justify-center pt-[50px] gap-[30px]'>

        <input className=' border-2 w-[500px] rounded-2xl p-[10px] font-bold ' type="text" name="" placeholder='Enter you todo' id="" value={task} onChange={(e) => setTask(e.target.value)} />



        <select name="options" onClick={color2} className={`${color} rounded-t-md ` } id="options" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option className='bg-green-600 ' value="complete">complete</option>
          <option className='bg-yellow-600 ' value="pending">pending</option>
          <option className='bg-red-600 rounded-b-md' value="later">later</option>
        </select>

        <button className='bg-blue-950 text-white p-[5px] rounded-md' onClick={addTask} >Add Task</button>
      </div>



      <div className='flex justify-around mt-[50px] '>


        <div className='bg-amber-800 w-[300px] text-center h-[400px]'>
          <h1>
            Pending Tasks
          </h1>
          <div>
          {pendingTasks().map((item, index) => (
            <div key={index}>
              <h3>{item.task}</h3>
            </div>
            
          ))}
          </div>
        </div>



        <div className='bg-amber-800 w-[300px] text-center h-[400px] overflow-scroll  overflow-x-hidden rounded-t-md '>
          <h1 className='bg-green-500 h-[30px] rounded-t-md'>
            Complete Tasks
          </h1>
          <div className='flex flex-col gap-[10px] '>
          {completeTasks().map((item, index) => (
            <div className='' key={index}>
              <h3>{item.task} </h3>
            </div>
          ))}
          </div>
        </div>


        <div className='bg-amber-800 w-[300px] text-center h-[400px]'>
          <h1>
            later Tasks
          </h1>
          {LaterTasks().map((item, index) => (
            <div key={index}>
              <h3>{item.task}</h3>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default page


