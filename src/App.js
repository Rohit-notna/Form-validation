import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';


function App() {
  const nameinp=useRef();
  const namepara=useRef();
  const emailinp=useRef();
  const emailpara=useRef();
  const userinp=useRef();
  const userpara=useRef();
  const passwordinp=useRef();
  const passwordpara=useRef();
  const confirminp=useRef();
  const confirmpara=useRef();

  function signup(){
    if(nameinp.current.value===""){
      namepara.current.innerHTML="Please enter your name ";
      namepara.current.style.color = "red";
    }
    else{
      namepara.current.innerHTML="";

    }
    if(emailinp.current.value===""){
      emailpara.current.innerHTML="Please enter your Email ";
      emailpara.current.style.color = "red";
    }
    else if (!emailinp.current.value.endsWith("@gmail.com")) {
      emailpara.current.innerHTML = "Invalid email address";
      emailpara.current.style.color = "red";
    }
    else{
      emailpara.current.innerHTML="";

    }
    if(userinp.current.value===""){
      userpara.current.innerHTML="Please enter your Username ";
      userpara.current.style.color = "red";
    }
    else{
      userpara.current.innerHTML="";

    }
    if(passwordinp.current.value===""){
      passwordpara.current.innerHTML="Please enter your Password ";
      passwordpara.current.style.color = "red";
    }
    else if(passwordinp.current.value.length<=7){
      passwordpara.current.innerHTML="Password is weak";
      passwordpara.current.style.color = "red";

    }
    else if(passwordinp.current.value.length>=8){
      passwordpara.current.innerHTML="Strong Password";
      passwordpara.current.style.color = "green";

    }
    else{
      passwordpara.current.innerHTML="";

    }  
   if(confirminp.current.value===""){
    confirmpara.current.innerHTML="Enter password again";
      confirmpara.current.style.color = "red";
   }
   else if((confirminp.current.value==="") && (passwordinp.current.value==="")){
    confirmpara.current.innerHTML="Enter password again";
    confirmpara.current.style.color = "red";
   }
   else if((confirminp.current.value) !== (passwordinp.current.value)){
    confirmpara.current.innerHTML="Password not same";
    confirmpara.current.style.color = "red";
   }
   else if((confirminp.current.value) === (passwordinp.current.value)){
    confirmpara.current.innerHTML="Password match";
    confirmpara.current.style.color = "green";

   }
   if ((nameinp.current.value !== "") && (emailinp.current.value !== "") &&
    (emailinp.current.value.endsWith("@gmail.com")) && (userinp.current.value !== "") &&
     (passwordinp.current.value !== "") && (passwordinp.current.value.length >= 8) &&
    (confirminp.current.value === passwordinp.current.value)) {
    alert("Signed in successfully");
    nameinp.current.value="";
    emailinp.current.value="";
    userinp.current.value="";
    passwordinp.current.value="";
    confirminp.current.value="";
    namepara.current.innerHTML="";
    emailpara.current.innerHTML="";
    userpara.current.innerHTML="";
    passwordpara.current.innerHTML="";
    confirmpara.current.innerHTML="";
  
  }
  
   
  }
  
  

  return (
    <div className="col-sm-12" >
   <div className="main col-sm-3 border mx-auto mt-4 " >
    <h1  className="text-center mt-4"><b>Sober Drink</b></h1>
    <div className="col-sm-11 mx-auto mt-4">
      <input type="text" ref={nameinp} class="form-control" id="email" placeholder="Full Name" />
    <p className="ms-1" id="email1" ref={namepara}></p>
    </div>
    <div className="col-sm-11 mx-auto">
      <input type="email" ref={emailinp} class="form-control" id="name" placeholder="Email"/>
    <p className="ms-1" ref={emailpara} id="name1"></p>
    </div>
    <div className="col-sm-11 mx-auto">
      <input type="text" ref={userinp} class="form-control" id="username" placeholder="Username"/>
    <p className="ms-1" ref={userpara} id="username1"></p>
    </div>
    <div className="col-sm-11 mx-auto">
      <input type="password" ref={passwordinp} class="form-control" id="password" placeholder="Password"/>
    <p className="ms-1" ref={passwordpara} id="password1"></p>
    </div>
    <div className="col-sm-11 mx-auto">
      <input type="password" ref={confirminp} class="form-control" id="password" placeholder="Re-enter Password"/>
    <p className="ms-1" ref={confirmpara} id="password1"></p>
    </div>
    <div className="col-sm-11 mx-auto mb-3">
      <button className="col-sm-12 pt-2 pb-2 btn-primary" onClick={signup}>Sign-Up</button>
    </div>
    </div>
   </div>
  );
}

export default App;
