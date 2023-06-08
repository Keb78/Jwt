
export default function SignUp({username,setUsername,password,setPassword,submit,setSubmit}){
 

 const handleLogin = () =>{
     
    const user = {
      "username":username,
      "password":password,
    } 
    
    
    const userString = JSON.stringify(user)
    
  
    fetch("http://localhost:4005/users", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: userString,
    })
      .then((res) => console.log(res))
      ;
  }


 
return(
<div>

<label className="label">Username</label>
<input onChange={(e) =>{setUsername(e.target.value)
console.log(username)
}} className="input"
value={username} type="username" />

<label className="label">Password</label>
<input onChange={(e)=>{setPassword(e.target.value)
console.log(password)}} className="input"
value={password} type="password" />

<button onClick={handleLogin} className="btn">
Submit
</button>

</div>
    )
        


}
