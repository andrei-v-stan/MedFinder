import React, { useState,/* useEffect */}  from 'react';
import axios from 'axios';
import LoginStyle from "../styles/Login.module.css"
import Cookies from 'js-cookie';

const Login: React.FC = () => {
  const userId = Cookies.get('userId');
  if(userId){
    window.location.href = '/';
  }else{
      /*useEffect(() => {
      // Create a new tag
      const newLinkTag = document.createElement('link');
      
      // Set attributes for the tag
      newLinkTag.rel = 'stylesheet';
      newLinkTag.href = 'src/styles/Login.css';

      // Append the new tag to the head of the document
      document.head.appendChild(newLinkTag);

      // Clean up by removing the tag on component unmount (optional)
      return () => {
        document.head.removeChild(newLinkTag);
      };
    }, []);*/

    const [formData, setFormData] = useState({
      login: '',
      password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLogIn = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/users/auth', formData);
        if(response.data != "wrong"){
          // Handle success, redirect, or perform other actions here
          Cookies.set('userId', response.data);
          // Redirect to the main page after login
          window.location.href = '/';
        }else{
          alert("Wrong Credentials");
        }
        
      } catch (error: any) {
        console.error('Signin failed', error.response.data);
        // Handle errors and provide feedback to the user here
        alert(error.response.data.message);
      }
    };

    return (
      <div>
        <div className={LoginStyle.top_logo}>
          <a href='/' className={LoginStyle.home_page_link}>
              Med <img src='/src/assets/signup/Logo.svg' /> Finder
          </a>
        </div>
        <div className={LoginStyle.form_wrapper}>       
          <div className={LoginStyle.section_wrapper}>
            <div className={LoginStyle.section_title}>
                Glad to help once more
            </div>
            <div className={LoginStyle.input_wrapper}>
                <img src='/src/assets/signup/User.svg' />
                <input 
                    type='text'                        
                    placeholder='Username or Email...'
                    name='login'
                    value={formData.login}
                    onChange={handleInputChange}
                    />
            </div>             
            <div className={LoginStyle.input_wrapper}>
                <img src='/src/assets/signup/Password.svg' />
                <input 
                    type='password' 
                    placeholder='Password' 
                    name='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    />
            </div>
            <div className={LoginStyle.forgot_pass}>
              <a className={LoginStyle.form_link} href='#'>Forgot password ?</a>
            </div>
            <div className={LoginStyle.button_wrapper}>
                <button type='button' onClick={handleLogIn}>Log In</button>
            </div>
            <div className={LoginStyle.register_text}>
              Don't have an account ? <a className='form_link' href='/signup'>Register here!</a>
            </div>
          </div>
        </div>
        {}
      </div>
    );
  }
};

export default Login;
