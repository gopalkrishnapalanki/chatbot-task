import React from 'react'

export default function Card() {



const cardData =[
  {
    name:'Rat',
    avatar:'https://res.cloudinary.com/dlxfoztlz/image/upload/v1660199484/avatar_r57b4l.jpg',
    button1:'snap',
    button2:'snap2',
    button3:'snap3',

  },
  {
    name:'Mat',
    avatar:'https://res.cloudinary.com/dlxfoztlz/image/upload/v1656752447/image-3293ce5f-bfce-4c5d-9618-d4cdf0591de1-1650545260_yohmlc.png',
    button1:'snap',
    button2:'snap2',
    button3:'snap3',

  },
  {
    name:'Bat',
    avatar:'https://res.cloudinary.com/dlxfoztlz/image/upload/v1655703261/gopi_rshxdp.png',
    button1:'snap',
    button2:'snap2',
    button3:'snap3',

  },
 
]


  return (
    <>

      <div className='container mt-4'>
        <div className="d-flex justify-content-between">
          <h6>BotList</h6>
          <button type="button" className="btn btn-dark ptb-1">New Bot</button>
        </div>
        <div className='row'>
          {cardData.map((item,index)=>(
            <div className='col-lg-3 my-card justify-content-between me-5  mt-4' key={index}>
            <div className="d-flex align-items-center">

              <div className=" p-4 my-image">
                <img src={item.avatar} height={50} className="rounded-circle" alt="..." />
                <p className='mb-0 pt-2'>{item.name}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pencil ms-2" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg></p>

              </div>

              {/* buttons separate to image */}
              <div>
                <div className=' justify-content-between'>
                  <button type="button" className="btn btn-outline-secondary ptb-1 btn-sm ms-3 ">{item.button1}</button>
                  <button type="button" className="btn btn-outline-secondary ptb-1 btn-sm ms-3 " >{item.button2}</button>
                </div>
                <button type="button" className="btn btn-outline-secondary ptb-1 btn-sm w-100 ms-3 mt-3" >{item.button3}</button>
              </div>
            </div>
          </div>
          ))}
          
        </div>

      </div>

    </>
  )
}
