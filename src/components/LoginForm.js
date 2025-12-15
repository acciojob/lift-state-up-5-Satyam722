import React from "react";
import './form.css';
const LoginForm = ({isLoggedIn,setIsLoggedIn}) => {
const login=(e)=>{
    e.preventDefault()
    
    setIsLoggedIn(true)
// console.log("isLoggedIn",props.prop[0])
// console.log("isLoggedIn",props.prop[1])

}

return (

<div>
   
{isLoggedIn ? <p>You are logged in!</p> :  
 <form onSubmit={login}>
      <div className="username">
        <label htmlFor="">Username:</label>
        <input type="text" />
      </div>
      <div className="password">
        <label htmlFor="">Password:</label>
        <input type="password" />
      </div>
     <button type='submit'>Login</button>
    </form> 
}</div>


  
  );
};

export default LoginForm;
