import React from 'react';
import './userinputoutput.css';
const useroutput = (props) => {
  return (
    <div className = "output">
    <p className="o1"> This person named {props.name} is great </p>
    <p className= "o2"> And is also perfect</p>
    </div>
  )
}


export default useroutput;
