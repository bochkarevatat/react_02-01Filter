import React from 'react'

 function ProjectList(props) {
  const { projects } = props
  return (
    <div className='card'>{projects.map((el, i) => <img className='images' src={el} key={i} alt={el}/>)}</div>
  )
}
export default ProjectList;