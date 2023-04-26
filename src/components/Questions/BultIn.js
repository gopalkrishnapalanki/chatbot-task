import React from 'react'
import { Row, Col } from 'react-bootstrap';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Card from 'react-bootstrap/Card';

export default function BultIn() {


    const builtInData = [
        {
            icon: <LocationOnOutlinedIcon />,
            title: 'question'
        },
        {
            icon: <LocationOnOutlinedIcon />,
            title: 'Single'
        },
        {
            icon: <LocationOnOutlinedIcon />,
            title: 'Multiple'
        },
        {
            icon: <LocationOnOutlinedIcon />,
            title: 'Form'
        },

    ]
  return (
    <div>
      <Row className='mt-2'>
                <p className='mb-0 pt-3'>Bult in questions</p>
                {builtInData.map((ques, index) =>
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
