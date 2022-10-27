import React, { useState, useEffect } from 'react';
import {
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Card from './Card';
import { projectList } from '../../../data';
import './ProjectsGallery.css';

function ProjectsGallery() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [loadedProjects, setLoadedProjects] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(6);

  function loadProjects() {
    const startIndex = pageNo * pageSize;
    const endIndex = startIndex + pageSize;
    const newProjects = projectList.filter(
      (value, index) => index >= startIndex && index < endIndex,
    );
    setLoadedProjects((prevProjects) => [...prevProjects, ...newProjects]);
    setPageNo((prevPageNo) => prevPageNo + 1);
  }

  useEffect(() => {
    if (isMobile) setPageSize(3);
    loadProjects();
  }, []);

  return (
    <Grid container spacing={4} className="galleryContainer">
      {loadedProjects.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={item.id}
          classes={{ item: 'item' }}
        >
          <Card
            id={item.id}
            title={item.title}
            overview={item.project_overview}
            backgroundImage={item.backgroundImage}
            frontImage={item.frontImage}
            technologies={item.technologies}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectsGallery;
