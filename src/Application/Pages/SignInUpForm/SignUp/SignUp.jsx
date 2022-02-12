import React from 'react'
import {BsFillPersonFill,BsLockFill} from 'react-icons/bs'
import  './SignUp.css'

const styleOfIcon = {
    marginBottom: '5px',
    fontSize:'1.5rem',
    marginRight:'5px'
}

const SignUp = () => {
    return (
        <form>
                <h2>Revolas</h2>
                    <div class="group">      
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label><BsFillPersonFill style={styleOfIcon}/>User Name</label>
                    </div>
                    <div class="group">      
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label><BsFillPersonFill style={styleOfIcon}/>Company Name</label>
                    </div>
                    <div class="group">      
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label><BsFillPersonFill style={styleOfIcon}/>Email</label>
                    </div>
                    <div class="group">      
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label><BsFillPersonFill style={styleOfIcon}/>Phone Number</label>
                    </div>
                    <div class="group">      
                        <input type={"password"} required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label><BsLockFill style={styleOfIcon}/>Password</label>
                    </div>

                    <div className="buttons">
                    <button type="button" class="btn btn-outline-warning">
                        Log In
                    </button>
                    <button type="button" class="btn btn-outline-light" >
                        Sign up
                    </button>
                    </div>
                </form>
    )
}

export default SignUp
