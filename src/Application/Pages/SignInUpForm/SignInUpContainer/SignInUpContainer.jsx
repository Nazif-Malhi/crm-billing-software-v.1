import React from 'react'
import './SignInUpContainer.css'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'

const SignInUpContainer = () => {
    return (
        <div className="logInMainContainer">
            <div className="logInConatiner">
                {/* <LogIn/> */}
                <SignUp/>
            </div>
        </div>
    )
}

export default SignInUpContainer
