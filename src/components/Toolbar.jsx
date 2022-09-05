import React from 'react'

 function Toolbar(props) {
  const {filters, selected, onSelectFilter} = props

  return (
    <ul className='toolbar'>
      {filters.map(item => 
        item === selected ? 
        <li onClick={(evt) => onSelectFilter(evt.currentTarget)} className='selected' key={item}>{item}</li> : 
        <li onClick={(evt) => onSelectFilter(evt.currentTarget)} key={item}>{item}</li>)}
    </ul>
  )
}
export default Toolbar;