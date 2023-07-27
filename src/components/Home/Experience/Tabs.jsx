import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box, Link, useTheme, useMediaQuery, Paper } from '@mui/material';

import { Language, Facebook, Instagram } from '@mui/icons-material';

import IconBtn from './IconBtn';

import { experienceList } from '../../../data';

import './Tabs.css';
import { tokens } from '../../../theme/Theme';

function StyledTabs() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = {
    backgroundColor: colors.primary[400],
  };

  return (
    <Paper
      color={colors.primary[400]}
      className="tab"
      style={isMobile ? { flexDirection: 'column', ...paperStyle } : { flexDirection: 'row', ...paperStyle }}
    >
      <Tabs
        color={colors.secondary[400]}
        orientation={isMobile ? 'horizontal' : 'vertical'}
        value={value}
        onChange={handleChange}
        className="tabs"
        sx={isMobile ? { width: '100%' } : { width: '200px', maxWidth: '200px', minWidth: '200px' }}
        centered
      >
        {experienceList.map((elem) => (
          <Tab style={{ color: colors.tertiary[400] }} label={elem.company} key={elem.id} />
        ))}
      </Tabs>
      {experienceList.map((elem) => (
        <TabPanel colors={colors.secondary[400]} value={value} index={elem.id} key={elem.id}>
          <Box mb={4}>
            <Typography color={colors.tertiary[400]} variant="h5">
              {elem.charge} @
              <Link
                href={elem.links.website || elem.links.facebook || elem.links.instagram}
                color={colors.tertiary[400]}
                target="_blank"
              >
                {elem.company}
              </Link>
            </Typography>
            <Typography variant="h6" color={colors.tertiary[400]} fontSize="14">
              {elem.experience_duration}
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography color={colors.tertiary[400]} variant="h5">
              {elem.job_experience}
            </Typography>
          </Box>
          <Box>
            {elem.links.website && <IconBtn icon={Language} fontSize={28} m={1} href={elem.links.website} />}
            {elem.links.facebook && <IconBtn icon={Facebook} fontSize={28} m={1} href={elem.links.facebook} />}
            {elem.links.instagram && <IconBtn icon={Instagram} fontSize={28} m={1} href={elem.links.instagram} />}
          </Box>
        </TabPanel>
      ))}
    </Paper>
  );
}

function TabPanel(props) {
  const { children, colors, value, index, ...other } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <Box color={colors} p={3} minHeight={isMobile ? 0 : '350px'}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default StyledTabs;
