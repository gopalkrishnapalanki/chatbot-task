import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {



  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top  bg-one" style={{backgroundColor:'#FAF3E4'}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1679292847/worke_black_imtqac.png"  height={30}/>
          </a>
       
          <div className="pe-4">

            <ul className="d-flex justify-content-around">
              {/* <p className='pe-5 pt-3'>You are in a free plan <span className='text-dark fw-bold my-theme-color'>Upgrade</span> or <span className='fw-bold'>Extend Trail</span></p> */}
              <li className='pe-4 pt-2'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/ri_customer-service-2-line_g9xk8s.svg" />
              </li>
              <li className='pe-4 pt-2'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/akar-icons_schedule_aubwiq.svg" />
              </li>
              <li className='pe-4 pt-2'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/ri_customer-service-2-line_g9xk8s.svg" />
              </li>
              <li className='pe-4 pt-2'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/fluent_tasks-app-24-regular_p5mwvf.svg" />
              </li>
              <li className='pe-4  pt-2'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/carbon_notification-new_i7ouoq.svg" />
              </li>
              <li className='pe-4 pt-2'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/Group_gi9ilg.svg" />
              </li>

            </ul>

          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar
