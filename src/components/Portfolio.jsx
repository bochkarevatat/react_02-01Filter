import React, { useState } from 'react'
import ProjectList from './ProjectList';
import Toolbar from './Toolbar'

function Portfolio(props) {
  const [image, setImage] = useState('All');
  let selectedCategory = null;
  const projects = props.props;

  if (image === 'All') {
    selectedCategory = projects.map(el => el.img)
    
  } else {
    selectedCategory = projects.filter(el => image === el.category).map(el => el.img)
    console.log(selectedCategory)
  }
  
  return (
    <>
      <Toolbar  filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={image}
                onSelectFilter={(filter) => setImage(filter.textContent)}/>
      <ProjectList projects={selectedCategory}/>
    </>
  )
}
export default Portfolio;