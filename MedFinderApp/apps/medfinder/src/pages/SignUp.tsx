import React from 'react';
import "../styles/SignUp.css"

const SignUp: React.FC = () => {
  return (
    <div>
      <div className='top_logo'>
        <a href='/' className='home_page_link'>
            Med <img src='/src/assets/Logo.svg' /> Finder
        </a>
      </div>
      <div className='form_wrapper'>
        <div className='form_title'>
            Create your account
        </div>
        <div className='sections_wrapper'>
            <div className='left_section'>
                <div className='section_title'>
                    General details
                </div>
                <div className='input_wrapper large_input'>
                    <img src='/src/assets/User.svg' />
                    <input type='text' placeholder='Enter a username' />
                </div>
                <div className='input_wrapper large_input'>
                    <img src='/src/assets/At.svg' />
                    <input type='email' placeholder='Enter your email address' />
                </div>
                <div className='input_wrapper large_input'>
                    <img src='/src/assets/At.svg' />
                    <input type='email' placeholder='Confirm your email address' />
                </div>
                <div className='input_wrapper large_input'>
                    <img src='/src/assets/Password.svg' />
                    <input type='password' placeholder='Enter a password' />
                </div>
                <div className='input_wrapper large_input'>
                    <img src='/src/assets/Password.svg' />
                    <input type='password' placeholder='Confirm your password' />
                </div>
            </div>
            <div className='middle_section'></div>
            <div className='right_section'>
                <div className='section_title'>
                    Personal details
                </div>
                <div className='input_group'>
                    <div className='input_wrapper mid_input'>
                        <input type='text' placeholder='Nickname' />
                    </div>
                    <div className='input_wrapper mid2_input'>
                        <input type='text' placeholder='Date of birth' />
                    </div>
                </div>
                <div className='input_group'>
                    <div className='input_wrapper small_input'>
                        <input type='text' placeholder='Weight' />
                        <div className='select_group'>
                            <div className='select_option left_option active'>
                                kg
                            </div>
                            <div className='select_option right_option'>
                                lbs
                            </div>
                        </div>                 
                    </div>
                    <div className='input_wrapper small_input'>
                        <input type='text' placeholder='Height' />
                        <div className='select_group'>
                            <div className='select_option left_option active'>
                                kg
                            </div>
                            <div className='select_option right_option'>
                                lbs
                            </div>
                        </div>                       
                    </div>
                    <div className='input_wrapper small_input'>
                        <input type='text' placeholder='Sex' />
                    </div>
                </div>
                <div className='info_text_wrapper'>
                    MedFinder will never sell your personal data, the personal 
                    details given are used only for statistical computation
                </div>
                <div className='button_wrapper'>
                    <button type='button'>Sign Up</button>
                </div>
            </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default SignUp;
