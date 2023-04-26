import React from 'react'
import { Row, Col } from 'react-bootstrap';
import QuestionMarkOutlined from '@mui/icons-material/QuestionMarkOutlined';
import Card from 'react-bootstrap/Card';



export default function Questions() {

    const questionData = [
        {
            icon: <QuestionMarkOutlined />,
            title: 'question'
        },
        {
            icon: <QuestionMarkOutlined />,
            title: 'Single'
        },
        {
            icon: <QuestionMarkOutlined />,
            title: 'Multiple'
        },
        {
            icon: <QuestionMarkOutlined />,
            title: 'Form'
        },

        {
            icon: <QuestionMarkOutlined />,
            title: 'Name'
        },
        {
            icon: <QuestionMarkOutlined />,
            title: 'Email'
        },

        {
            icon: <QuestionMarkOutlined />,
            title: 'Name'
        },
 
    

    ]
  return (
    <div>
        <Row className='mt-2'>
                <p className='mb-0 pt-3'>Ask a Question</p>
                {questionData.map((ques, index) =>
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
