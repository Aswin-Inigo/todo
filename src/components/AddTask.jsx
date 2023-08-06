import React, { useContext, useEffect } from 'react'
import {MdOutlineAddchart} from 'react-icons/md'
import { TaskContext } from '../Context'

function AddTask() {

  const {task,inputRef,taskArray,handleChange,handleTask} = useContext(TaskContext)

  useEffect(()=>{
    inputRef.current.focus();
    localStorage.setItem("taskData",JSON.stringify(taskArray))
  },[taskArray,inputRef])


  return (
    <div className='add-task'>
     <input type="text" className='add-task-input' ref={inputRef} value={task} onChange={handleChange} />
      <MdOutlineAddchart className='add-task-icon' onClick={handleTask}  />
    </div>
  )
}

export default AddTask
