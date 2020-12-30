
import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';

const App = () => {

   const [name,setName]= useState("");
    const [email,setEmail]= useState("");
     const [url,setUrl]= useState("");

const responseGoogle=(response)=>{
  setName(response.profileObj.name);
  setEmail(response.profileObj.email);
  setUrl(response.profileObj.url);

  console.log(response);
  console.log(response.profileObj);

}

 

  
  return (
    <div className="App">
     <h1>Login with google</h1>
     <h2>Welcome: {name}</h2>
     <h2>Email:{email}</h2>
     <img src={url} alt={name}/>
     
     <GoogleLogin
     clientId="323205374983-qlulnafv5ae9sk9ubsl9nprndsp5sjl8.apps.googleusercontent.com"
     buttonText="Login"
     onSuccess={this.responseGoogle}
     onFailure={this.responseGoogle}
     cookiePolicy={'single_host_origin'}

     />
    </div>
  );
 }


export default App;
