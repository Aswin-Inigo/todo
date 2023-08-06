import React from 'react'
import {FcTodoList} from "react-icons/fc"
import '../style/app.css'

function Title() {
  return (
    <div className='title-div'>
      <h2>My to do list <FcTodoList/> </h2>
    </div>
  )
}

export default Title
