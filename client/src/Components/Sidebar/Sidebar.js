import React, {useState} from 'react'
import "./Sidebar.css";
import Home from '../Home/Home';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import SidebarList from './SidebarList';

const Sidebar = ({theme,changeTheme}) => {

    const [expandSidebar, sexExpanSidebar] = useState(true);

    const handleExpandClick = ()=>{
        sexExpanSidebar(!expandSidebar)
    }

  return (
    <div className='container-fluid sidebar-section'>
        
        <div className={expandSidebar ? "sidebar-expand sidebar":'sidebar'}>

            <div className='icon-for-sidebar-expand-and-collapse'>
                <p onClick={handleExpandClick}>

                    {expandSidebar ? (
                        <BsChevronLeft size={30}/>
                    ):(
                        <BsChevronRight size={30}/>
                    )}

                </p>
            </div>

            <SidebarList expandSidebar={expandSidebar}/>

        </div>

        <div className='container'>

            <Home changeTheme={changeTheme} theme={theme}/>

        </div>

    </div>
  )
}

export default Sidebar