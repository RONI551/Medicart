import{FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import React, { useState } from 'react';
import './login.css'
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import InitializeAuthentication from '../../Firebase/Firebase-initialize';
InitializeAuthentication()
const Googleprovider = new GoogleAuthProvider() 
const Githubprovider = new GithubAuthProvider()
const FacebookProvider = new FacebookAuthProvider()
const Auth = getAuth()
const Login = () => {
    const [user, setUser] = useState({})
    const handleGithhubSignIn =()=>{
        signInWithPopup (Auth, Githubprovider)
        .then(result=>{const {displayName,email,photoURL}=result.user; const GithubUser ={name: displayName, photo: photoURL,email: email }; setUser(GithubUser)
            console.log(user)
        })
    }
    const handleFacebookSignIn =()=>{
        signInWithPopup(Auth,FacebookProvider).then(result=>{const {displayName,email,photoURL} = result.user; const fbuser={name: displayName, email: email, photo: photoURL } ; setUser(fbuser)})
    }
    const handleGoogleSignIn=()=>{
       
        signInWithPopup(Auth,Googleprovider).then(result=>{const loginuser = result.user;const {displayName, email,photoURL} = loginuser;const  loginuserArray ={name: displayName,email: email,photo: photoURL};setUser(loginuserArray)})
        .catch(error=>{
           const {message} =error.message;
          const errormsz = {msz:message}
           setUser(errormsz)
        })
   
    }
    const handleSignOut= ()=>{
        signOut(Auth).then(()=>{ setUser({ }) })
        .catch((error) => { })
    }
    
  
    return (
        
        <div class="containerr">
        <div class="screen">
        
            <div class="screen__content">
            { user.name?
                //optional chaining start
                <div className='login'>
                <div className='userImage'><img className='Imagess'  src={user.photo} alt="" /></div>
                <h3 className='userImage'>{user.name}</h3>
                <span className='userImage' ><EmailIcon/>{user.email} </span>

                <button class="button login__submit" onClick={handleSignOut}>
                <span class="button__text " style={{display:'flex',	justifyContent: "center",
                alignItems: "center"}}><LogoutIcon/> log out</span>
                <i class="button__icon fas fa-chevron-right"></i>
            </button>
            </div>
            :
                
                <div>
                <form class="login">
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input type="text" class="login__input" placeholder="User name / Email"/>
                    </div>
                    <div class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input type="password" class="login__input" placeholder="Password"/>
                    </div>
                    <h2>{user.msz}</h2>
                   
                 <button class="button login__submit">
                        <span class="button__text">Log In Now</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>				
                    				
                </form>
                <div class="social-login">
                    <h3>log in via</h3>
                    <div class="social-icons">
                        <a href="#" class="social-login__icon fab fa-instagram" onClick={handleGithhubSignIn} ><GitHubIcon/> </a>
                        <a href="#" class="social-login__icon fab fa-facebook " onClick={handleFacebookSignIn} ><FacebookIcon/> </a>
                        <a href="#" class="social-login__icon fab fa-twitter" onClick={handleGoogleSignIn}><GoogleIcon/> </a>
                        
                    
                    </div>
                </div>
                </div>
                //optional chaining end
               }
            
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

export default  Login ;
