import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Container, Row, Col } from 'react-bootstrap';
import BotName from './BotName';
import BotTheme from './BotTheme';


export default function BotFlow() {

  const [value, setValue] = useState('2');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container className='mt-4 bg-white'>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Theme"  value="1" />
              <Tab label="Flow" value="2" />
              <Tab label="Setting" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">

            <BotTheme/>

          </TabPanel>
          <TabPanel value="2">

            <Row>
              <Col lg={4} className='my-col-border'>
                
                <BotName/>
              </Col>
              <Col lg={8}>
                Bot names
              </Col>
            </Row>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Container>

    </div>
  )
}
