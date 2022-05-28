import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { Button } from '@mui/material';
const Auth = getAuth();
const Register = () => {
    const [email, setEmail] = useState(' ')
    const [password, setPasword] = useState(' ')
    const [error, setError]= useState('')
    const [isLogin, setIsLogin]= useState(false)
    const toggleLogin =e=>{
        setIsLogin(e.target.checked)
    }
    const handleForgetPassword= ()=>{
          sendPasswordResetEmail(Auth, email)
          .then(()=>{
              console.log('reset email send done');
              setError('')
          })
          .catch((error)=>{
              setError(error.message)
          })
    }

    const handlePaswordChange=(e)=>{
        setPasword(e.target.value)
    }
    const handleEmailChange =(e)=>{
        setEmail(e.target.value)
    }
    const handleRegistrations =(e)=>{
        e.preventDefault();
       if(password.length<6){
           setError('password Must be at least 6 characters')
           return;
       }
       if(!/(?=.*?[A-Z])/.test(password)){
           setError('password Must contain two upper case')
           return;
       }
       //ternary operator is used here
       isLogin? processLogin(email,password) :createNewUser(email,password)
       
    }
    const processLogin=(email,password)=>{
        signInWithEmailAndPassword(Auth,email,password).then(result=>{const user =result.user;setError('')}).catch(error=>{setError(error.message)})

    }
   const createNewUser=(email,password)=>{
 
    createUserWithEmailAndPassword(Auth,email,password).then((userCredential)=>{
        const user =userCredential.user
        
        console.log(user)
        setError(' ')
        veryfyEmail();
    })
    .catch(error =>{
      setError(error.message)
    })

   }
   const veryfyEmail=()=>{
    sendEmailVerification(Auth.currentUser)
  .then(() => {
    console.log('email verification done')

  })
  .catch((error)=>{
  setError(error.message)
})
       
   }
    return (
        
        <div class="Rcontainerr">  <div class="Rscreen">
        
            <div class="screen__content">
            
                <div>
                <form onSubmit={handleRegistrations} class="Rlogin">
                { !isLogin &&    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input type="text" class="login__input" placeholder="User name"/>
                    </div>}
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input onBlur={handleEmailChange} type="email" class="login__input" placeholder="Enter your email" required/>
                    </div>
                    <div onBlur={handlePaswordChange} class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input type="password" class="login__input" placeholder="Enter Password" required/>
                    </div>
                   {!isLogin && <div class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input type="password" class="login__input" placeholder="Reenter Password"/>
                    </div>}
                    <div className='userImage' style={{marginRight:'45px'}}>
                    <input onChange={toggleLogin} type="checkbox" name="" id="" />
                    <h6 style={{marginLeft:'5px'}}>Already Registerd?</h6>
                    
                    </div>
                    {!isLogin&&<h6 style={{color:'red'}}>{error}</h6>}
                   
                 <button class="button login__submit">
                        <span class="button__text">{ !isLogin? 'Register': 'login'} Now</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>	
                    { isLogin &&  <Button onClick={handleForgetPassword}> Forgotten password?</Button> }	
                    { isLogin && <h5 style={{color:'red'}}>{error}</h5>}	
                    				
                </form>
                <div class="social-login">
                    <h3>log in via</h3>
                    <div class="social-icons">
                        <a href="#" class="social-login__icon fab fa-instagram"  ><GitHubIcon/> </a>
                        <a href="#" class="social-login__icon fab fa-facebook "><FacebookIcon/> </a>
                        <a href="#" class="social-login__icon fab fa-twitter"><GoogleIcon/> </a>
                        
                    
                    </div>
                </div>
                </div>
              
            
            </div>
            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>		
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    );
};

export default Register;