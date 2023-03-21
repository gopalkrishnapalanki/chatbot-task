import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { Button } from '@mui/material';
import { Button } from 'react-bootstrap';
import { height } from '@mui/system';










function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
        color:'white',
    };
}

export default function BotTheme() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',  }}
            >

                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider',p:4 }}
                >
                    <Tab label="Info"size="small" sx={{backgroundColor:'black' ,borderRadius:'10px', color:'white',fontSize:'14px',textAlign:'left',}} {...a11yProps(0)}>
                    </Tab>
                    <Tab label="Theme" sx={{backgroundColor:'black' ,borderRadius:'10px', color:'white',mt:2}} {...a11yProps(1)} />
                    <Tab label="Advanced" sx={{backgroundColor:'black' ,borderRadius:'10px', color:'white',mt:2,width:'200px',}} {...a11yProps(2)} />

                </Tabs>
                <TabPanel value={value} index={0}>

                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>

            </Box>
        </div>
    )
}
