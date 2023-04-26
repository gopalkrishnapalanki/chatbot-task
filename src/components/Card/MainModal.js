import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';

import { updateBotData, postBotData, deleteBotData } from '../../Others/BotDataGetter';


export default function MainModal(props) {

    const [updatetitle, setUpdateTitle] = useState("")
    const [title, setTitle] = useState("")


    // delete bot call
    const deleteBot = async () => {
        const { data, status } = await deleteBotData(props.params.id);
        props.getData()
        props.onHide()
    }



    // post bot call
    const createBot = async () => {
        let botObj = {
            title: title,
        }
        if (title === '') {
            alert('Please enter the data')
        } else {
            const { data, status } = await postBotData(botObj);
            props.onHide()
            setTitle('')
            props.getData()
        }
    }


    // update bot call
    const updateBot = async () => {
        let updatebotObj = {
            title: updatetitle,
        }
        if (updatetitle === '') {
            alert('Please update the name')
        } else {
            const { data, status } = await updateBotData(props.params.id, updatebotObj);
            console.log(data, "getData")

            setUpdateTitle(data.payload.data)
            props.getData()
        }

    }

    const close = () => {
        props.onHide()
    }


    return (
        <>
            <Modal {...props} >
                <Modal.Header closeButton>
                    {props.type == 'update' ? <Modal.Title className='flow-title'>Edit</Modal.Title> : null}
                    {props.type == 'create' ? <Modal.Title className='flow-title'>Create</Modal.Title> : null}
                    {props.type == 'delete' ? <Modal.Title className='flow-title'>Delete</Modal.Title> : null}
                    
                </Modal.Header>
                <Modal.Body>
                    {props.type == 'update' ?
                        <div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <form className='mt-4 ' onSubmit={updateBot}>
                                            <input type="text" className="form-control w-100" defaultValue={props.params.title} aria-label="First name" onChange={(e) => setUpdateTitle(e.target.value)} />
                                            <div className='d-flex justify-content-end'>
                                            <button type="button" className="btn btn-success mt-3 " onClick={() => { updateBot(); close() }}>Update</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                    {props.type == 'delete' ?
                        <div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <p>Are you sure want to delete?</p>
                                        <div className='d-flex justify-content-end'>
                                            <button type="button" className="btn btn-dark mt-3 me-3" onClick={() => close()}>Cancel</button>
                                            <button type="button" className="btn btn-outline-danger mt-3 " onClick={() => deleteBot()}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                    {props.type == 'create' ?
                        <div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <form className='mt-4 needs-validation' onSubmit={createBot} novalidate>
                                            <input type="text" className="form-control " placeholder="Bot Name" required aria-label="First name" onChange={(e) => setTitle(e.target.value)} />

                                            <div className='d-flex justify-content-end'>
                                            <button type="button" className="btn btn-dark mt-3" onClick={() => createBot()}>Create</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}

                    {props.type == 'addFlowName' ?
                        <div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <form className='mt-4 needs-validation' novalidate>
                                            <input type="text" className="form-control " placeholder="Flow Name" required aria-label="First name" onChange={(e) => setTitle(e.target.value)} />

                                            <div className='d-flex justify-content-end'>
                                                <button type="button" className="btn btn-outline-danger mt-3 me-3">Delete</button>
                                                <button type="button" className="btn btn-dark mt-3">Save</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                         {props.type == 'editFlowName' ?
                        <div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <form className='mt-4 needs-validation' novalidate>
                                            <input type="text" className="form-control " placeholder="Flow Name" required aria-label="First name" onChange={(e) => setTitle(e.target.value)} />

                                            <div className='d-flex justify-content-end'>
                                                <button type="button" className="btn btn-outline-danger mt-3 me-3">Delete</button>
                                                <button type="button" className="btn btn-dark mt-3">Save</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}

                </Modal.Body>
            </Modal>

        </>
    )
}


