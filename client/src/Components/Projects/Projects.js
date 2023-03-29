import React from 'react';
import ProjectList from './ProjectList';
import "./Project.css"

const Projects = () => {

    const data = [
        {
            name: "MERN Stack Job Portal",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            projectlink: "http://react-company-profile.netlify.app/",
            techused: [
                {
                    techname: "Node JS"
                },
                {
                    techname: "Express JS"
                },
                {
                    techname: "React JS"
                },
                {
                    techname: "Vue JS"
                },
                {
                    techname: "Next JS"
                },
            ]
        },
        {
            name: "MERN Stack Event Management",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            projectlink: "http://react-company-profile.netlify.app/",
            techused: [
                {
                    techname: "Node JS"
                },
                {
                    techname: "Express JS"
                },
                {
                    techname: "React JS"
                },
                {
                    techname: "Vue JS"
                },
                {
                    techname: "Next JS"
                },
            ]
        },
        {
            name: "MERN Stack Social Media",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            projectlink: "http://react-company-profile.netlify.app/",
            techused: [
                {
                    techname: "Node JS"
                },
                {
                    techname: "Express JS"
                },
                {
                    techname: "React JS"
                },
                {
                    techname: "Vue JS"
                },
                {
                    techname: "Next JS"
                },
            ]
        },
        {
            name: "MERN Stack Video Steaming",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            projectlink: "http://react-company-profile.netlify.app/",
            techused: [
                {
                    techname: "Node JS"
                },
                {
                    techname: "Express JS"
                },
                {
                    techname: "React JS"
                },
                {
                    techname: "Vue JS"
                },
                {
                    techname: "Next JS"
                },
            ]
        },

        {
            name: "MERN Stack Social Media",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            projectlink: "http://react-company-profile.netlify.app/",
            techused: [
                {
                    techname: "Node JS"
                },
                {
                    techname: "Express JS"
                },
                {
                    techname: "React JS"
                },
                {
                    techname: "Vue JS"
                },
                {
                    techname: "Next JS"
                },
            ]
        },

        {
            name: "MERN Stack E-commerce",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            projectlink: "http://react-company-profile.netlify.app/",
            techused: [
                {
                    techname: "Node JS"
                },
                {
                    techname: "Express JS"
                },
                {
                    techname: "React JS"
                },
                {
                    techname: "Vue JS"
                },
                {
                    techname: "Next JS"
                },
            ]
        },
    ]
  return (
    <div className='container project-section' id='project'>

        <div className='section-title'>
            <h5>Projects</h5>
            <span className="line"></span>
        </div>

        <div className='row project-form'>

            {data.map((item,index) =>(
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
                    <ProjectList {...item}/>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Projects