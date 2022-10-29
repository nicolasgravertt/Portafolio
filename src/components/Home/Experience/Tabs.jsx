import React, { useState } from 'react';
import {
  Tabs, Tab, Typography, Box, Link, useTheme, useMediaQuery,
} from '@mui/material';

import { Language, Facebook, Instagram } from '@mui/icons-material';

import IconBtn from './IconBtn';

import { experienceList } from '../../../data';

import './Tabs.css';

function StyledTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab" style={isMobile ? { flexDirection: 'column' } : { flexDirection: 'row' }}>
      <Tabs
        orientation={isMobile ? 'horizontal' : 'vertical'}
        value={value}
        onChange={handleChange}
        className="tabs"
        sx={isMobile ? { width: '100%' } : { width: '200px', maxWidth: '200px', minWidth: '200px' }}
        centered
      >
        {experienceList.map((elem) => (
          <Tab label={elem.company} key={elem.id} />
        ))}
      </Tabs>
      {experienceList.map((elem) => (
        <TabPanel value={value} index={elem.id} key={elem.id}>
          <Box mb={4}>
            <Typography variant="h5">
              {elem.charge}
              {' '}
              @
              <Link
                href={elem.links.website || elem.links.facebook || elem.links.instagram}
                color="primary"
                target="_blank"
              >
                {elem.company}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" fontSize="14">
              {elem.experience_duration}
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1" color="textPrimary">
              {elem.job_experience}
            </Typography>
          </Box>
          <Box>
            {elem.links.website && (
            <IconBtn icon={Language} fontSize={28} m={1} href={elem.links.website} />
            )}
            {elem.links.facebook && (
            <IconBtn icon={Facebook} fontSize={28} m={1} href={elem.links.facebook} />
            )}
            {elem.links.instagram && (
            <IconBtn icon={Instagram} fontSize={28} m={1} href={elem.links.instagram} />
            )}
          </Box>
        </TabPanel>
      ))}
    </div>
  );
}

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} minHeight={isMobile ? 0 : '350px'}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default StyledTabs;
