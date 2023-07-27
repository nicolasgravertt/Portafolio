const skillsList = [
  { title: 'Javascript', value: 80 },
  { title: 'HTML5', value: 80 },
  { title: 'CSS', value: 80 },
  { title: 'React JS', value: 75 },
  { title: 'Material UI', value: 80 },
  { title: 'Node JS ', value: 60 },
  { title: 'Python', value: 70 },
  { title: 'Mongo DB', value: 80 },
  { title: 'SQL Server', value: 80 },
  { title: 'PostgreSQL', value: 80 },
  { title: 'Bootstrap', value: 80 },
  { title: 'GIT', value: 80 },
  { title: 'Linux', value: 80 },
  { title: 'API Restful', value: 80 },
  { title: 'Postman', value: 80 },
];
const projectList = [
  {
    id: 1,
    title: 'Aplicacion de carrito de compras',
    project_overview: 'Aplicacion de ventas en desarrollo',
    technologies: ['React JS', 'Node JS', 'MongoDB'],
    backgroundImage:
      'https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg',
    frontImage:
      'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const experienceList = [
  {
    id: 0,
    company: 'Kyndryl Chile',
    charge: 'Full stack web developer, Innovation Team.',
    experience_duration: '21 Octubre 2021 - 30 Octubre 2022',
    job_experience: `Desarrollo de distintos proyectos, en múltiples lenguajes y tecnologías.
    Capacidad de adaptación a nuevas tecnologías continuamente, Reunión con
    clientes para toma de requisitos, metodología ágil, API Restful.`,
    links: {
      website: 'https://www.kyndryl.com/cl/es',
      instagram: 'https://twitter.com/kyndryl',
      facebook: 'https://www.facebook.com/Kyndryl/',
    },
  },
  {
    id: 1,
    company: 'SAMTECH',
    charge: 'Full stack React web developer.',
    experience_duration: '16 Febrero 2023 - 16 Mayo 2023',
    job_experience: `Desarrollé y migré distintos módulos dentro de un sistema web en React que consistía en
    monitorización, gestión de recorridos y gestión conductores para distintos clientes dentro
    del rubro minero.`,
    links: {
      website: 'https://www.samtech.cl/home/',
    },
  },
  {
    id: 2,
    company: 'CAS Chile',
    charge: 'Desktop finances App developer.',
    experience_duration: '17 Julio 2019 - 09 Septiembre 2021',
    job_experience: `Desarrollo de módulos sistemas de finanzas, soporte continuo del sistema de
    finanzas y derivados, Consultas complejas SQL, integración de sistemas por servicios web.`,
    links: {
      website: 'https://www.caschile.cl/',
      facebook: 'https://es-la.facebook.com/CasChileinformatica/',
      instagram: 'https://www.instagram.com/cas_chile/?hl=es',
    },
  },
  {
    id: 3,
    company: 'IMPERIAL S.A',
    charge: 'Training developer',
    experience_duration: '24 Septiembre 2018 - 01 Enero 2019',
    job_experience: `Desarrollo de aplicación de escritorio en java, consultas SQL, 
    procedimientos almacenados, integración de sistemas, Web Services.`,
    links: {
      website: 'https://www.imperial.cl/',
      facebook: 'https://es-la.facebook.com/ImperialElEspecialista/',
      instagram: 'https://www.instagram.com/imperial_cl/?hl=es',
    },
  },
];

export { skillsList, projectList, experienceList };
