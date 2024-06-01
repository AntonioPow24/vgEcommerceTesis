const domain = import.meta.env.VITE_DOMAIN

export const projectList = [
    {
        id:1,
        img:`${domain}/images/projects/residenciales/project1.jpg`,
        title:'residenciales',
        description: 'Esta es la descripcion del proyecto 1, aqui se describe todo lo que se necesita saber de este proyecto y como lo aplica la empresa',
        galery: {
            1: `${domain}/images/projects/residenciales/project1.jpg`,
            2: `${domain}/images/projects/residenciales/project1.jpg`,
            3: `${domain}/images/projects/residenciales/project1.jpg`,
            4: `${domain}/images/projects/residenciales/project1.jpg`,
            5: `${domain}/images/projects/residenciales/project1.jpg`,
            6: `${domain}/images/projects/residenciales/project1.jpg`,
        }
    },

    {
        id:2,
        img:'./images/projects/instituciones/project2.jpg',
        title:'instituciones',
        description: 'Esta es la descripcion del proyecto 2, aqui se describe todo lo que se necesita saber de este proyecto y como lo aplica la empresa',
        galery: {
            1: `${domain}/images/projects/instituciones/project2.jpg`,
            2: `${domain}/images/projects/instituciones/project2.jpg`,
            3: `${domain}/images/projects/instituciones/project2.jpg`,
            4: `${domain}/images/projects/instituciones/project2.jpg`,
            5: `${domain}/images/projects/instituciones/project2.jpg`,
            6: `${domain}/images/projects/instituciones/project2.jpg`,
        }
    },

    {
        id:3,
        img:`${domain}/images/projects/hospitales/project3.jpg`,
        title:'hospitales',
        description: 'Esta es la descripcion del proyecto 3, aqui se describe todo lo que se necesita saber de este proyecto y como lo aplica la empresa',
        galery: {
            2: `${domain}/images/projects/hospitales/projectH.jpg`,
            1: `${domain}/images/projects/hospitales/projectH.jpg`,
            3: `${domain}/images/projects/hospitales/projectH.jpg`,
            4: `${domain}/images/projects/hospitales/projectH.jpg`,
            5: `${domain}/images/projects/hospitales/projectH.jpg`,
            6: `${domain}/images/projects/hospitales/projectH.jpg`,
        }
    },

    {
        id:4,
        img:`${domain}/images/projects/negocios/project4.jpg`,
        title:'negocios',
        description: 'Esta es la descripcion del proyecto 4, aqui se describe todo lo que se necesita saber de este proyecto y como lo aplica la empresa',
        galery: {
            1: `${domain}/images/projects/negocios/project4.jpg`,
            2: `${domain}/images/projects/negocios/project4.jpg`,
            3: `${domain}/images/projects/negocios/project4.jpg`,
            4: `${domain}/images/projects/negocios/project4.jpg`,
            5: `${domain}/images/projects/negocios/project4.jpg`,
            6: `${domain}/images/projects/negocios/project4.jpg`,
        }
    },

]