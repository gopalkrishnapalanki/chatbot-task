import React from 'react'
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import MainModal from '../Card/MainModal';
import ModeEditOutlineOutlined from '@mui/icons-material/ModeEditOutlineOutlined';

import AddOutlined from '@mui/icons-material/AddOutlined';
import BotFlowModal from './BotFlowModal';
import Questions from '../Questions/Questions';
import { getFlowData } from '../../Others/BotDataGetter';
import { useParams } from 'react-router-dom';
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import Statements from '../Questions/Statements';
import BultIn from '../Questions/BultIn';





export default function BotName() {
    const [flowData, setFlowData] = useState([])

    const [botModal, setBotModal] = useState({ modal: false })
    const [botType, setbotType] = useState('')
    const [flowSelect,setFlowSelect] =  useState("Main Flow")

    const {id} = useParams()

    const flowSelectData  = flowSelect.split("/");


    useEffect(() => {
        getBotFlowData()

    }, [])



    // getFlowcall
    const getBotFlowData = async () => {
        const { data, status } = await getFlowData(id);
        setFlowData(data.payload.data)
    }
console.log(flowData,"flowData")

    return (
        <>
            <Row>
                <Col lg={8}>
                    <Form.Select aria-label="Default select example" onChange={(e) =>setFlowSelect(e.target.value)}>
                        
                        {flowData.map((item, index) => {
                            let x = `${item.title}/${item.id}`;
                            return  (
                                <option key={item.id} value={x}>{item.title}</option>
                            )
                           
                        }
                                
                        )}
                    

                    </Form.Select>
                </Col>
                <Col lg={1}>
                    <AddOutlined fontSize='medium' onClick={() => { setBotModal({ modal: true, }); setbotType('addFlowName') }} />

                </Col>

                <Col lg={1}>
                    {flowSelectData[0] === "Main Flow"  ? null : 
                    <ModeEditOutlineOutlined onClick={() => { setBotModal({ modal: true,  }); setbotType('editFlowName') }} />
                        }
                </Col>
                <Col lg={1}>
                    {flowSelectData[0] === "Main Flow" ? null : 
                    <DeleteOutlineOutlined  style={{ color: "brown" }} onClick={() => { setBotModal({ modal: true,  }); setbotType('deleteFlowName') }} />
                }
                </Col>

                <Col lg={1}>
                </Col>

            </Row>


            <Row className='mt-2'>
                <Questions />
                <BultIn/>
                <Statements/>

            </Row>


            <BotFlowModal
                setBotModal={(doc) => setBotModal(doc)}
                show={botModal.modal}
                onHide={() => setBotModal({ modal: false, modalType: "", type: "", details: {}, })}
                params={botModal}
                type={botType}
                getFlowData={getFlowData}
                getBotFlowData={getBotFlowData}
                flowID={flowSelectData[1]}
            />


        </>
    )
}
