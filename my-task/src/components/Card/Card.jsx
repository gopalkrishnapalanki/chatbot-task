import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Avatar from '@mui/material/Avatar';
import { getCardData } from '../../Others/BotDataGetter';
import MainModal from './MainModal';



export default function Card() {

  const [botData, setBotData] = useState([])
  const [oneModal, setOneModal] = useState({ modal: false })
  const [type, setType] = useState('')




  useEffect(() => {
    getData()

  }, [])



  // getcall

  const getData = async () => {
    const { data, status } = await getCardData();
    console.log(data, "getData")
    setBotData(data.payload.data)
  }



  return (
    <>

      <div className='container mt-4 '>
        <div className="d-flex justify-content-between">
          <h5 className='fw-bold'>BotList</h5>
          <Button variant="contained" size="small" sx={{':hover': {
      bgcolor: '#0E374B', // theme.palette.primary.main
      color: 'white',

    },bgcolor:'#0E374B'}} type='submit' onClick={() => { setOneModal({ modal: true, }); setType('create') }}>
            <SettingsOutlined fontSize="small"  sx={{ m: 0.5 }} />NewBot</Button>
        </div>
        <div className='row'>
          {botData.map((item, index) => (
            <div className='col-lg-4 justify-content-between p-2' key={index}>
              <div className="my-card row align-items-center m-0 p-2">
                <div className="col-sm-6 col-md-6 col-lg-6 p-4 my-image">
                  <Avatar sx={{ p: 4, m:2, backgroundColor: '#0E374B' }} >G</Avatar>
                  <p className='mb-0 pt-2 text-truncate my-text ' >{item.title}</p>
                  <div className='d-flex justify-content between ps-3'>
                    <ModeEditOutlineOutlinedIcon fontSize='small' sx={{ mt: 2, color: 'blue' }} onClick={() => { setOneModal({ modal: true, id: item.id, title: item.title }); setType('update') }} />
                    <DeleteOutlineOutlinedIcon fontSize='small' sx={{ mt: 2, mx: 2, color: '#964B00' }} onClick={() => { setOneModal({ modal: true, id: item.id }); setType('delete') }} />
                  </div>

                </div>

                {/* buttons separate to image */}
                <div className='col-sm-6 col-md-6 col-lg-6 p-4'>
                  <div className=' justify-content-between '>
                    <button type="button" className="btn btn-outline-secondary ptb-1 btn-sm ms-3 text-dark">Snap</button>
                    <Link to={`/bot/${item.id}/flow`}>
                    <button type="button" className="btn btn-outline-secondary ptb-1 btn-sm ms-3 text-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Bot Flow" >Flow</button></Link>
                  </div>
                  <button type="button" className="btn btn-outline-secondary ptb-1 btn-sm w-100 ms-2 mt-3 text-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Bot Flow">snap3</button>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>



      <MainModal
        setOneModal={(doc) => setOneModal(doc)}
        show={oneModal.modal}
        onHide={() => setOneModal({ modal: false, modalType: "", type: "", details: {}, })}
        params={oneModal}
        getData={getData}
        type={type}

      />







    </>
  )
}
