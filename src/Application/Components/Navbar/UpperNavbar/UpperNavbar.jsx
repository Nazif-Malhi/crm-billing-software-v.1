import React from 'react'
import './UpperNavbar.css'
import {FaUserAlt} from 'react-icons/fa'
import {AiOutlineDown} from 'react-icons/ai'
import {IoNotifications} from 'react-icons/io5'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const styleOfIcon={fontSize: "1.2em"}
const styleOfIconPos={fontSize: "1.2em", fontWeight:"bolder"}

const upperNavbar = () => {
    return (
        <> <div className="upper_NavbarItems">
            <div className="image_upperNavbar">
                
            </div>
            <div className="posSystem">
                <HiOutlineShoppingBag style={styleOfIconPos}/>
                <h5>POS</h5>
            </div>
            <div className="notification_button">
                <IoNotifications style={styleOfIcon}/>
            </div>
            <div className="menue_upperNavbar">
                <FaUserAlt/>
                <h7>Admin</h7>
                <AiOutlineDown/>
            </div>
        </div> 
        </>
      
    )
}

export default upperNavbar
