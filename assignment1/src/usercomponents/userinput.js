import React from 'react';
import './userinputoutput.css';
const userinput = (props) =>{
  return <input type="text" onChange={props.changed} value={props.name}/>
}

export default userinput;
