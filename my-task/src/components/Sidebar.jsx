import React from 'react'

import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const SideBar = () => {
  return (
    <>
      <div className='my-sidenav'>
        <ul style={{paddingLeft:'10px'}}>
          
        <Link to="/card" style={{ textDecoration: 'none' }}>
            <li className=''>
                <HomeIcon fontSize='medium' sx={{marginTop:'10px',color:'white'}}/>
                {/* <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874765/DashboardHome_o4ctye.svg" className='my-side-icons' width={50} /> */}
                {/* <p className=''>Dashboard</p> */}
            </li>
            </Link>
        </ul>


      </div>
    </>
  )
}

export default SideBar
