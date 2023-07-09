import React from 'react'
import googleImg from '../assets/google.png'
import styles from '../style/MyComponent.module.css'
import '../style/LogInStyle.css'
import {auth, googleAuthentication } from '../Config/firebase.config'
import { signInWithPopup } from 'firebase/auth'


function LogIn(){

    const signwithGoogle=async ()=>{
        try{
            await signInWithPopup(auth, googleAuthentication);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Log In</h1>
                <form className={styles.formData}>
                    <input type='email' placeholder='abc@gmail.com'></input>
                    <input type="password" placeholder='password'></input>
                    <button className={styles.btn}>Sign In</button>
                </form> 
                <div className='line-word'>
                    <div className='line'></div>
                    <div className='word'>or</div>
                    <div className='line'></div>
                </div>   
                <div className='options'>
                    <p>Continue with</p> <span><img src={googleImg} onClick={signwithGoogle}></img></span>
                </div>
            </div>
        </div>
    )
}

export default LogIn;