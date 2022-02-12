import React , {useState, useEffect}  from 'react'
import './SideNavbar.css'
import {BsFillArrowLeftSquareFill , BsSearch , BsFillArrowRightSquareFill} from 'react-icons/bs'
import { SidebarData } from '../../../../Data/SidebarData'
import SideNavbarMenue from '../SideNavbarMenue/SideNavbarMenue.js'

const styleOfButton = {color:"#1E90FF",fontSize: "1.7em"}

const styleOfSearchBar= {
    color:"white",
    fontSize:"1.3em"
}


const SideNavbar = (props) => {

    const [inactive,setInactive]=useState(false);

    

    useEffect(() => {
      
        props.onCollapse(inactive);
    }, [inactive]); // <- add empty brackets here
    
    return (
        <div className={ `side-menue ${inactive ? "inactive" : ""}` }>
            <div className="topSection">
                <div className="logo">
                </div>
                <div className="toggle-menue" onClick = {() => setInactive(!inactive)}>
                    {inactive ?
                    <BsFillArrowRightSquareFill style={styleOfButton}/>:
                    <BsFillArrowLeftSquareFill style={styleOfButton}/>
                    }
                </div>
            </div>
        <div className="search-controller">
            <div className="btn-search" >
                <BsSearch style={styleOfSearchBar}/>
            </div>
                <input type="text" placeholder="Search"/>
        </div>
        <div className="divider"/>
            <div className="menue_list">
               {SidebarData.map((item,index) => {
                   return <SideNavbarMenue item={item} key={index}/>;
               })}
            </div>
        </div>
    )
}

export default SideNavbar

