import React, { useContext } from 'react'
import {AiFillEdit,AiOutlineDelete} from 'react-icons/ai'
import { TaskContext } from '../Context'

function Content() {
const {taskArray,handleDelete,editTodo} = useContext(TaskContext)


  return (
    <div className='content'>
      <ul className='content-ul'>
        {
          taskArray.map((task)=>{
            
            return(
              
              <li key={task.id}>
              <div className='li-content'>
                {task.newTask}
              </div>
              <div className="icons">
                <AiFillEdit className='icon edit' onClick={()=>editTodo(task.id)}/>
                <AiOutlineDelete className='icon del' onClick={()=>handleDelete(task.id)}/>
              </div>
            </li>
            )
          })
        }
       
        
      </ul>
    </div>
  )
}

export default Content
