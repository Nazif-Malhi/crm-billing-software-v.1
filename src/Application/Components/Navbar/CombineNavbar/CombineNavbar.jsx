import React, { useState, useEffect } from 'react'
import './CombineNavbar.css'
import SideNavbar from '../SideNavbar/SideNavbar/SideNavbar'
import UpperNavbar from '../UpperNavbar/UpperNavbar'

const CombineNavbar = (props) => {
      const [inactive, setInactive] = useState(false);

      const [inactivebacktoApp, setInactivebacktoApp] = useState(false);
    useEffect(() => {
      
        props.onCollapse(inactivebacktoApp);
    }, [inactivebacktoApp]);
    return (
        <div className="mainContainer_for_Navbars">
                <div className="sideNavbar_div">
                    <SideNavbar 
                          onCollapse={(inactive) => {
                              setInactivebacktoApp(inactive);
                            //  console.log(inactive);
                             setInactive(inactive);
                           }}
                    />
                </div>
                <div className="upperNavbar_div">
                    { <UpperNavbar/> }
                </div>
        </div>
    )
}

export default CombineNavbar
