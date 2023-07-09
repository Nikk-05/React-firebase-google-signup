import React, {useState} from 'react'
import {Link } from 'react-router-dom';
import styles from '../style/MyComponent.module.css'
import '../style/SignUpStyle.css'
import { auth } from '../Config/firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ()=>{

    const[formData ,setFormData]=useState({
        name:'',
        email:'',
        password:''
        })


    const handleData=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    
    const storeData= async ()=>{
        await createUserWithEmailAndPassword(auth,formData.email,formData.password);
    }

    return (  
            <div className={styles.wrapper}>
                <div className={styles.container}>
                        <h1 className={styles.heading}>Sign Up</h1>
                        <form  className={styles.formData} onSubmit={(e)=>{
                            e.preventDefault();
                            
                        }}>
                            <input type="text" placeholder="Enter Name" name='name' value={formData.name} onChange={handleData}></input>
                            <input type="email" placeholder="Enter Email" name='email' value={formData.email} onChange={handleData}></input>
                            <input type="password" placeholder='Set Password' name='password' value={formData.password} onChange={handleData}></input>
                            <button className={styles.btn} type='submit' onClick={storeData}>Sign Up</button>
                        </form>
                        <p className='text'>Already have an account? <Link to="/login">Sign In</Link> </p>  
                </div>
            </div>
              
        
    )
}
export default SignUp;