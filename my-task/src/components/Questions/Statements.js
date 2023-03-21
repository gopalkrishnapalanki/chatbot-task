import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Card from 'react-bootstrap/Card';


export default function Statements() {
    const statementData = [
        {
            icon: <ShoppingCartOutlinedIcon />,
            title: 'question'
        },
        {
            icon: <ShoppingCartOutlinedIcon />,
            title: 'Single'
        },
        {
            icon: <ShoppingCartOutlinedIcon />,
            title: 'Multiple'
        },
        {
            icon: <ShoppingCartOutlinedIcon />,
            title: 'Form'
        },

    ]
  return (
    <div>



<Row className='mt-2'>
                <p className='mb-0 pt-3'>Statements</p>
                {statementData.map((ques, index) =>
                    <>
                        <Col lg={3} key={index} >
                            <Card className='mt-3'>
                                <Card.Body className='my-card-body'>
                                    <Card.Title className='m-c-m'>{ques.icon}</Card.Title>
                                    <Card.Text className='my-card-font text-center'>
                                        {ques.title}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                    </>

                )}

            </Row>

    </div>
  )
}
