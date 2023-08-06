import React from 'react'
import Title from './Title'
import AddTask from './AddTask'
import Content from './Content'

function HomeTodo() {
  return (
    <div className='home'>
    <Title/>
    <AddTask/>
    <Content/>
    </div>
  )
}

export default HomeTodo
