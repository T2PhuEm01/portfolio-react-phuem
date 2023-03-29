import React, { useState } from 'react'
import "./WorkExperience.css"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { GrWorkshop } from "react-icons/gr"

const WorkExperience = () => {

    const data = [
        {
            companyname: "Google",
            position: "Full Stack Developer",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            year: "2019-2020",
            techskills: [
                {
                    techname : "Node JS"
                },
                {
                    techname : "Express JS"
                },
                {
                    techname : "React JS"
                },
            ]
        },
        {
            companyname: "Facebook",
            position: "Full Stack Developer",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            year: "2020-2021",
            techskills: [
                {
                    techname : "Node JS"
                },
                {
                    techname : "Express JS"
                },
                {
                    techname : "React JS"
                },
            ]
        },
        {
            companyname: "Tik Tok",
            position: "Full Stack Developer",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            year: "2021-2022",
            techskills: [
                {
                    techname : "Python"
                },
                {
                    techname : "Express JS"
                },
                {
                    techname : "React JS"
                },
                {
                    techname : "Material UI"
                },
            ]
        },
        {
            companyname: "Youtube",
            position: "Full Stack Developer",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            year: "2022-2023",
            techskills: [
                {
                    techname : "Django"
                },
                {
                    techname : "Express JS"
                },
                {
                    techname : "React JS"
                },
            ]
        },
    ]

    const colors = [
        "#ffbb28",
        "#ff8042",
        "#001cce",
        "#00c79f",
    ]
  return (
    <div className='container workexperience-section' id='workexperience'>

        <div className='section-title'>
            <h5>Work Experience</h5>
            <span className="line"></span>
        </div>
        <div className='timeline-section'>
            <VerticalTimeline lineColor='#ff8042'>
                {data.map((item, index ) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={item.year}
                        dateClassName="date-class"
                        iconStyle={{ background: colors[index], color: '#fff' }}
                        icon={<GrWorkshop />}>
                        <h3 className="vertical-timeline-element-title">
                            {item.companyname}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>

                        <div className='row'>
                            {item.techskills.map((tec,index) => (
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                                    <div className='tech-skills'>
                                        <p>{tec.techname}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>
                            {item.des}
                        </p>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </div>
    </div>
  )
}

export default WorkExperience