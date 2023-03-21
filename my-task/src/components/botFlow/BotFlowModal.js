import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postFlowData, updateFlowData, deleteFlowData,getFlowById } from '../../Others/BotDataGetter';

export default function BotFlowModal(props) {
    console.log(props);
    const [updateBotFlow, setUpdateBotFlow] = useState("")

    const [flowName, setFlowName] = useState("")
    const [title, setTitle] = useState("")

    const { id } = useParams()

    

    useEffect(()=>{
        flowGetByID()
    },[props.flowID])




    const createFlow = async () => {
        let flowObj = {
            title: title,
            bot: id
        }
        if (title === '') {
            alert('Please enter the data')
        } else {
            const { data, status } = await postFlowData(id, flowObj);

            props.onHide()
            setTitle('')
            props.getBotFlowData()
        }
    }



const flowGetByID =async () =>{

    const {data}  = await getFlowById(props.flowID)
    setFlowName(data.payload.data.title)
    
    
    

}

    const updateFlow = async () => {
        let updatebotObj = {
            title: flowName,
            bot: id
        }
        if (flowName === '') {
            alert('Please update the name')
        } else {
            const { data, status } = await updateFlowData(props.flowID, updatebotObj);

            setUpdateBotFlow(data.payload.data)
            props.getBotFlowData()
            props.onHide()

        }
    }

    const deleteBotFlow = async () => {
        const { data, status } = await deleteFlowData(props.flowID);
        props.getBotFlowData()
        props.onHide()
    }


    const close = () => {
        props.onHide()
    }





    return (
        <div>
            <Modal {...props} >
                <Modal.Header closeButton>

                    {props.type == 'addFlowName' ? <Modal.Title className='flow-title'>Flow Name</Modal.Title> : null}
                    {props.type == 'editFlowName' ? <Modal.Title className='flow-title'>Edit Flow Name</Modal.Title> : null}
                    {props.type == 'deleteFlowName' ? <Modal.Title className='flow-title'>Delete Flow Name</Modal.Title> : null}

                </Modal.Header>
                <Modal.Body>

                    {props.type == 'addFlowName' ?
                        <div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <form className='mt-4 needs-validation' novalidate>
                                            <input type="text" className="form-control " placeholder="Flow Name" required aria-label="First name" onChange={(e) => setTitle(e.target.value)} />

                                            <div className='d-flex justify-content-end'>
                                                <button type="button" className="btn btn-outline-danger mt-3 me-3" onClick={() => close()}>Delete</button>
                                                <button type="button" className="btn btn-dark mt-3" onClick={() => createFlow()}>Save</button></div>
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
                                        <form className='mt-4 needs-validation' novalidate onSubmit={updateFlow}>
                                            <input type="text" className="form-control "  defaultValue={flowName} placeholder="Flow Name" required aria-label="First name" onChange={(e) => setFlowName(e.target.value)} />

                                            <div className='d-flex justify-content-end'>
                                                <button type="button" className="btn btn-outline-danger mt-3 me-3" onClick={()=> close()}>Delete</button>
                                                <button type="button" className="btn btn-dark mt-3" onClick={() => updateFlow()}>Save</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                    {props.type == 'deleteFlowName' ?
                        <div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <form className='mt-4 needs-validation' novalidate onSubmit={deleteBotFlow}>
                                            {/* <input type="text" className="form-control " defaultValue={props.params.title} placeholder="Flow Name" required aria-label="First name" onChange={(e) => setUpdateBotFlow(e.target.value)} /> */}
                                            <p>Are you sure want to delete?</p>
                                            <div className='d-flex justify-content-end'>
                                                <button type="button" className="btn btn-dark mt-3 me-3" onClick={()=> close()}>Cancel</button>
                                               <button type="button" className="btn btn-outline-danger mt-3 " onClick={() => deleteBotFlow()}>Delete</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}

                </Modal.Body>
            </Modal>
        </div>
    )
}
