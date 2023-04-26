import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';


export default function DashboardLayout() {
    const [open, setOpen] = useState(false);

  return (
    <div>
      
      <div id="wrapper">
                <div id="">
                    <Navbar />
                </div>
                <div id="side-nav">
                    <SideBar />
                </div>


                <div className='my-div' >
                    <div sx={{ paddingLeft: "100px" }}>

                        <Outlet />
                    </div>
                </div>
            </div>
    </div>
  )
}
