import React from "react";
import PropTypes from 'prop-types';

function DropDown({name, label, id, list, onChange}){ 
  return ( <div className= 'dropdown'>
    <label htmlFor={id}>{label}</label>
    <select defaultValue={'DEFAULT'} name={name} id={id} onChange={onChange}>
        <option value="DEFAULT" disabled>Select a {label}</option>
        {list.map((option, index) => {
          return <option key={index} >{option.name}</option>
        })}    
    </select>  
  </div>
)};

DropDown.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    list: PropTypes.array,
    onChange: PropTypes.func,
};

export default DropDown;