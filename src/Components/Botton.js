import React from 'react'
import ButtonList from './ButtonList';

const Button = () => {

  const button=["x","y","z"];

 

  return (
   <>
    { button.map(x=> <ButtonList button_name={x}></ButtonList>)}
   </>
  
  )
}

export default Button;