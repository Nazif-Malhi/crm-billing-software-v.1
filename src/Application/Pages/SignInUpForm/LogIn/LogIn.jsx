import React from 'react'
import './LogIn.css'
import {BsFillPersonFill,BsLockFill} from 'react-icons/bs'

const styleOfIcon = {
    marginBottom: '5px',
    fontSize:'1.5rem',
    marginRight:'5px'
}

const LogIn = () => {
    return (
                <form>
                <h2>Revolas</h2>
                    <div class="group">      
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label><BsFillPersonFill style={styleOfIcon}/>Name</label>
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

export default LogIn
